import { useState } from 'react'
import axios from 'axios'

export default function Message() {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState({
    type: '',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const content = formData.content.trim()
    const name = formData.name.trim()

    if (!name || !content) {
      setFeedback({
        type: 'error',
        message: '请先填写昵称和留言内容。',
      })
      return
    }

    if (name.length > 20) {
      setFeedback({
        type: 'error',
        message: '昵称长度需要在 1 到 20 个字符之间。',
      })
      return
    }

    if (content.length > 500) {
      setFeedback({
        type: 'error',
        message: '留言内容长度需要在 1 到 500 个字符之间。',
      })
      return
    }

    setIsSubmitting(true)
    setFeedback({
      type: '',
      message: '',
    })

    try {
      await axios.post('/api/messages', {
        name,
        content,
      })

      setFormData({ name: '', content: '' })
      setFeedback({
        type: 'success',
        message: '留言提交成功，已保存到数据库。',
      })
    } catch (error) {
      const message =
        error.response?.data?.message || '留言提交失败，请稍后再试。'

      setFeedback({
        type: 'error',
        message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="page message-page">
      <p className="eyebrow">Message</p>
      <h1>留言板</h1>
      <p className="message-intro">
        欢迎留下你的昵称和一句留言，提交后会保存到网站数据库中。
      </p>

      <form className="message-form info-card" onSubmit={handleSubmit}>
        <label>
          <span>昵称</span>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="请输入昵称"
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
            maxLength="500"
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '提交中...' : '提交留言'}
        </button>

        {feedback.message ? (
          <p className={`message-feedback ${feedback.type}`}>{feedback.message}</p>
        ) : null}
      </form>

      <article className="info-card empty-message">
        <h2>留言提交说明</h2>
        <p>昵称限制 1-20 个字符，留言限制 1-500 个字符，且 30 秒内同一 IP 只能提交一次。</p>
      </article>
    </section>
  )
}
