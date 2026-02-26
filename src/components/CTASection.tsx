import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section
      style={{
        background: 'linear-gradient(to bottom, #0D0F12, #111318)',
        padding: '7rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em',
              color: '#F5F7F8',
              lineHeight: 1.08,
              marginBottom: '1.25rem',
            }}
          >
            Ready to design your atmosphere?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '1.0625rem',
              color: 'rgba(245,247,248,0.55)',
              lineHeight: 1.75,
              maxWidth: '500px',
              margin: '0 auto 2.5rem',
            }}
          >
            Configure your Vora system to your exact space, flora, and environmental goals.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Primary CTA */}
            <motion.a
              href="/configurator"
              style={{
                display: 'inline-block',
                background: '#00F2FF',
                color: '#0D0F12',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderRadius: '2px',
                padding: '0.75rem 2rem',
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

            {/* Ghost CTA */}
            <motion.a
              href="/modular-story"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#00F2FF',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderRadius: '2px',
                padding: '0.75rem 2rem',
                textDecoration: 'none',
                cursor: 'pointer',
                border: '1px solid #00F2FF',
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: '0 0 20px rgba(0,242,255,0.20)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Explore the Science
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
