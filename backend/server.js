const express = require('express')
const fs = require('fs')
const path = require('path')
const { createMessage, getAllMessages, initDatabase } = require('./db')

const app = express()
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3001
const MESSAGE_RATE_LIMIT_WINDOW_MS = 30 * 1000
const lastSubmissionByIp = new Map()
const frontendDistPath = path.resolve(
  process.env.FRONTEND_DIST_PATH || path.join(__dirname, '..', 'dist')
)
const frontendIndexPath = path.join(frontendDistPath, 'index.html')

app.use(express.json())

function sanitizeText(value) {
  if (typeof value !== 'string') {
    return ''
  }

  return value
    .replace(/[<>]/g, '')
    .split('')
    .filter((char) => {
      const code = char.charCodeAt(0)
      const isBlockedControlChar =
        (code >= 0 && code <= 8) || (code >= 11 && code <= 31) || code === 127

      return !isBlockedControlChar
    })
    .join('')
    .trim()
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']

  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim()
  }

  return req.ip || req.socket?.remoteAddress || 'unknown'
}

function validateMessageInput(name, content) {
  if (!name || !content) {
    return 'Name and content are required'
  }

  if (name.length < 1 || name.length > 20) {
    return 'Name must be between 1 and 20 characters'
  }

  if (content.length < 1 || content.length > 500) {
    return 'Content must be between 1 and 500 characters'
  }

  return ''
}

function isRateLimited(ip) {
  const now = Date.now()
  const lastSubmittedAt = lastSubmissionByIp.get(ip)

  if (lastSubmittedAt && now - lastSubmittedAt < MESSAGE_RATE_LIMIT_WINDOW_MS) {
    return true
  }

  lastSubmissionByIp.set(ip, now)
  return false
}

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Backend is running',
  })
})

app.post('/api/messages', async (req, res) => {
  const name = sanitizeText(req.body?.name)
  const content = sanitizeText(req.body?.content)
  const validationError = validateMessageInput(name, content)

  if (validationError) {
    res.status(400).json({
      success: false,
      message: validationError,
    })
    return
  }

  const clientIp = getClientIp(req)

  if (isRateLimited(clientIp)) {
    res.status(429).json({
      success: false,
      message: 'Too many requests, please wait 30 seconds before trying again',
    })
    return
  }

  try {
    const message = await createMessage({ name, content })

    res.status(201).json({
      success: true,
      message: 'Message saved successfully',
      data: message,
    })
  } catch {
    res.status(500).json({
      success: false,
      message: 'Failed to save message',
    })
  }
})

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await getAllMessages()

    res.json({
      success: true,
      data: messages,
    })
  } catch {
    res.status(500).json({
      success: false,
      message: 'Failed to load messages',
    })
  }
})

if (fs.existsSync(frontendIndexPath)) {
  app.use(express.static(frontendDistPath))

  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(frontendIndexPath)
  })
}

const startServer = async () => {
  try {
    await initDatabase()

    app.listen(PORT, HOST, () => {
      console.log(`Backend server is running at http://${HOST}:${PORT}`)
      if (fs.existsSync(frontendIndexPath)) {
        console.log(`Serving frontend from ${frontendDistPath}`)
      }
    })
  } catch (error) {
    console.error('Failed to initialize database:', error.message)
    process.exit(1)
  }
}

startServer()
