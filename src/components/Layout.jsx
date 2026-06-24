import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

const stars = [
  { left: '8%', top: '12%', size: 2, delay: '0s' },
  { left: '28%', top: '8%', size: 3, delay: '1.4s' },
  { left: '52%', top: '16%', size: 2, delay: '0.6s' },
  { left: '76%', top: '9%', size: 2, delay: '2.1s' },
  { left: '92%', top: '22%', size: 3, delay: '0.9s' },
  { left: '14%', top: '42%', size: 2, delay: '2.8s' },
  { left: '34%', top: '50%', size: 2, delay: '1.1s' },
  { left: '68%', top: '45%', size: 3, delay: '3.3s' },
  { left: '88%', top: '54%', size: 2, delay: '1.8s' },
  { left: '10%', top: '78%', size: 3, delay: '0.3s' },
  { left: '30%', top: '82%', size: 2, delay: '2.4s' },
  { left: '58%', top: '76%', size: 2, delay: '1.6s' },
  { left: '82%', top: '84%', size: 3, delay: '3s' },
]

const meteors = [
  { left: '92%', top: '4%', width: 210, height: 3, delay: '0s', duration: '6.8s' },
  { left: '78%', top: '14%', width: 170, height: 2, delay: '1.6s', duration: '7.8s' },
  { left: '104%', top: '22%', width: 240, height: 3, delay: '3.1s', duration: '7.2s' },
  { left: '86%', top: '38%', width: 190, height: 2, delay: '4.8s', duration: '8.6s' },
  { left: '112%', top: '8%', width: 260, height: 3, delay: '6.2s', duration: '9s' },
  { left: '96%', top: '30%', width: 220, height: 3, delay: '7.4s', duration: '7.4s' },
  { left: '108%', top: '52%', width: 180, height: 2, delay: '9.1s', duration: '8.2s' },
]

export default function Layout() {
  return (
    <div className="app">
      <div className="site-effects" aria-hidden="true">
        {stars.map((star) => (
          <span
            className="twinkle-star"
            key={`layout-${star.left}-${star.top}`}
            style={{
              '--star-left': star.left,
              '--star-top': star.top,
              '--star-size': `${star.size}px`,
              '--star-delay': star.delay,
            }}
          />
        ))}
        {meteors.map((meteor) => (
          <span
            className="meteor"
            key={`layout-${meteor.left}-${meteor.top}-${meteor.delay}`}
            style={{
              '--meteor-left': meteor.left,
              '--meteor-top': meteor.top,
              '--meteor-width': `${meteor.width}px`,
              '--meteor-height': `${meteor.height}px`,
              '--meteor-delay': meteor.delay,
              '--meteor-duration': meteor.duration,
            }}
          />
        ))}
      </div>

      <Navbar />

      <main className="page-container">
        <Outlet />
      </main>
    </div>
  )
}
