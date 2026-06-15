import { useEffect, useState } from 'react'

const STORAGE_KEY = 'suhao-message-board'

function loadMessages() {
  try {
    const savedMessages = localStorage.getItem(STORAGE_KEY)
    return savedMessages ? JSON.parse(savedMessages) : []
  } catch {
    return []
  }
}

export default function Message() {
  const [messages, setMessages] = useState(loadMessages)
  const [formData, setFormData] = useState({
    name: '',
    content: '',
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }, [messages])

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const content = formData.content.trim()
    const name = formData.name.trim() || '匿名朋友'

    if (!content) {
      return
    }

    const newMessage = {
      id: crypto.randomUUID(),
      name,
      content,
      createdAt: new Date().toLocaleString('zh-CN', {
        dateStyle: 'short',
        timeStyle: 'short',
      }),
    }

    setMessages((currentMessages) => [newMessage, ...currentMessages])
    setFormData({ name: '', content: '' })
  }

  function handleDelete(messageId) {
    setMessages((currentMessages) =>
      currentMessages.filter((message) => message.id !== messageId),
    )
  }

  return (
    <section className="page message-page">
      <p className="eyebrow">Message</p>
      <h1>留言板</h1>
      <p className="message-intro">
        写下一句想说的话，它会保存在当前浏览器中，刷新页面也不会丢失。
      </p>

      <form className="message-form info-card" onSubmit={handleSubmit}>
        <label>
          <span>你的名字</span>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="可以不填"
            maxLength="20"
          />
        </label>

        <label>
          <span>留言内容</span>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="写点什么吧..."
            rows="4"
            maxLength="160"
          />
        </label>

        <button type="submit">发布留言</button>
      </form>

      <div className="message-list">
        {messages.length === 0 ? (
          <article className="info-card empty-message">
            <h2>还没有留言</h2>
            <p>第一条留言正在等待出现。</p>
          </article>
        ) : (
          messages.map((message) => (
            <article className="info-card message-item" key={message.id}>
              <div>
                <h2>{message.name}</h2>
                <time>{message.createdAt}</time>
              </div>
              <p>{message.content}</p>
              <button type="button" onClick={() => handleDelete(message.id)}>
                删除
              </button>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
