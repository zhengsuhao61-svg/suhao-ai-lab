import SplitText from '../components/SplitText.jsx'

export default function Home() {
  return (
    <section className="page home-page">
      <div className="hero-avatar-wrap">
        <img className="hero-avatar" src="/avatar.jpg" alt="郑苏昊的头像" />
      </div>

      <div className="hero-content">
        <SplitText
          text="突破自己，征服天上！"
          className="home-title"
          tag="h1"
          splitType="chars"
          delay={55}
          duration={0.85}
          ease="power3.out"
          from={{ opacity: 0, y: 34, rotateX: -72, filter: 'blur(8px)' }}
          to={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          threshold={0.35}
          rootMargin="-40px"
        />
        <p className="hero-text">我想要的不过是这些，我并不渴望超人般的天赋异禀.</p>
      </div>

      <div className="hero-panel">
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
