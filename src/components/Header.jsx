import Logo from './Logo.jsx'

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Logo />
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
