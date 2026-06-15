export default function Home() {
  return (
    <section className="page home-page">
      <div className="hero-content">
        <p className="eyebrow">AI Learning Lab</p>
        <h1>你好，我是郑苏昊，正在学习 AI 与编程，希望创造有趣的数字世界。</h1>
        <p className="hero-text">
          这里是我的个人网站，也是我练习 React、Codex 和 AI 开发的数字空间。
        </p>
      </div>

      <div className="hero-panel">
        <div className="status-line">
          <span className="status-dot"></span>
          <span>Learning Mode</span>
        </div>
        <div className="tech-list">
          <span>React</span>
          <span>Vite</span>
          <span>AI</span>
          <span>Codex</span>
        </div>
      </div>
    </section>
  )
}
