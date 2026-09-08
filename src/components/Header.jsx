import Logo from './Logo.jsx'

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Logo />
        <div className="header-center">
          <div className="header-title">Gen<span className="red">AI</span> with Python</div>
          <div className="header-tagline">Python developers who build AI will lead the next wave.</div>
        </div>
        <nav>
          <a href="#curriculum">Curriculum</a>
          <a href="#modes">Online / Offline</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
