import { useEffect, useState } from 'react'
import axios from 'axios'

function formatTime(value) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return date.toLocaleString('zh-CN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export default function AdminMessages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await axios.get('/api/messages')
        setMessages(response.data.data || [])
      } catch {
        setError('留言加载失败，请确认后端服务已经启动。')
      } finally {
        setLoading(false)
      }
    }

    loadMessages()
  }, [])

  return (
    <section className="page message-page">
      <p className="eyebrow">Admin</p>
      <h1>后台留言管理</h1>
      <p className="message-intro">这里用于查看访客提交到数据库中的全部留言。</p>

      {loading ? (
        <article className="info-card empty-message">
          <h2>加载中</h2>
          <p>正在读取留言数据...</p>
        </article>
      ) : null}

      {error ? (
        <article className="info-card empty-message">
          <h2>读取失败</h2>
          <p>{error}</p>
        </article>
      ) : null}

      {!loading && !error ? (
        <div className="message-list">
          {messages.length === 0 ? (
            <article className="info-card empty-message">
              <h2>暂无留言</h2>
              <p>数据库里还没有收到新的访客留言。</p>
            </article>
          ) : (
            messages.map((message) => (
              <article className="info-card message-item" key={message.id}>
                <div className="message-meta">
                  <h2>{message.name}</h2>
                  <time>{formatTime(message.created_at)}</time>
                </div>
                <p>{message.content}</p>
              </article>
            ))
          )}
        </div>
      ) : null}
    </section>
  )
}
