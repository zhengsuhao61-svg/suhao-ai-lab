const path = require('path')
const sqlite3 = require('sqlite3').verbose()

const dbPath = path.resolve(process.env.DB_PATH || path.join(__dirname, 'data.sqlite'))

const db = new sqlite3.Database(dbPath, (error) => {
  if (error) {
    console.error('Failed to connect to SQLite database:', error.message)
    return
  }

  console.log(`SQLite database connected at ${dbPath}`)
})

const initDatabase = () =>
  new Promise((resolve, reject) => {
    db.run(
      `
        CREATE TABLE IF NOT EXISTS messages (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          content TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `,
      (error) => {
        if (error) {
          reject(error)
          return
        }

        console.log('messages table is ready')
        resolve()
      }
    )
  })

const createMessage = ({ name, content }) =>
  new Promise((resolve, reject) => {
    db.run(
      `
        INSERT INTO messages (name, content)
        VALUES (?, ?)
      `,
      [name, content],
      function onInsert(error) {
        if (error) {
          reject(error)
          return
        }

        resolve({
          id: this.lastID,
          name,
          content,
        })
      }
    )
  })

const getAllMessages = () =>
  new Promise((resolve, reject) => {
    db.all(
      `
        SELECT id, name, content, created_at
        FROM messages
        ORDER BY created_at DESC, id DESC
      `,
      (error, rows) => {
        if (error) {
          reject(error)
          return
        }

        resolve(rows)
      }
    )
  })

module.exports = {
  db,
  dbPath,
  createMessage,
  getAllMessages,
  initDatabase,
}
