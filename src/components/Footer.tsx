import { motion } from 'framer-motion'
import logo from '../assets/Google Gemini Generated Image.png'

const footerLinks = [
  { label: 'Systems', href: '/modular-story' },
  { label: 'Configurator', href: '/configurator' },
  { label: 'Vora OS', href: '/vora-os' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0D0F12',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '3rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '2rem',
          }}
        >
          {/* Logo */}
          <a href="/">
            <img
              src={logo}
              alt="Vora Hydrolabs"
              style={{ height: '32px', width: 'auto', display: 'block' }}
            />
          </a>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(245,247,248,0.55)',
                  textDecoration: 'none',
                }}
                whileHover={{ color: '#00F2FF' }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="/configurator"
            style={{
              display: 'inline-block',
              background: '#00F2FF',
              color: '#0D0F12',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.8125rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderRadius: '2px',
              padding: '0.625rem 1.5rem',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 0 24px rgba(0,242,255,0.45)',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Build Your System
          </motion.a>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '0.8125rem',
              color: 'rgba(245,247,248,0.35)',
            }}
          >
            © 2025 Vora Hydrolabs. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a
              href="/privacy"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.8125rem',
                color: 'rgba(245,247,248,0.35)',
                textDecoration: 'none',
              }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.8125rem',
                color: 'rgba(245,247,248,0.35)',
                textDecoration: 'none',
              }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
