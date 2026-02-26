import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/Google Gemini Generated Image.png'

const navLinks = [
  { label: 'Systems', href: '/modular-story' },
  { label: 'Science', href: '#features' },
  { label: 'Configurator', href: '/configurator' },
  { label: 'Vora OS', href: '/vora-os' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: 'rgba(13,15,18,0.65)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="/">
          <img
            src={logo}
            alt="Vora Hydrolabs"
            style={{ height: '36px', width: 'auto', display: 'block' }}
          />
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(245,247,248,0.75)',
                textDecoration: 'none',
              }}
              whileHover={{ color: '#00F2FF' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Open menu"
        >
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#F5F7F8' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#F5F7F8' }} />
          <span style={{ display: 'block', width: '14px', height: '1.5px', background: '#F5F7F8' }} />
        </button>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
