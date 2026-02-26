import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroDay from '../assets/Gemini Generated Image (1).png'
import heroNight from '../assets/Gemini Generated Image.png'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const nightOpacity = useTransform(scrollY, [0, 600], [0, 1])
  const dayHeadlineOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const nightHeadlineOpacity = useTransform(scrollY, [200, 500], [0, 1])
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 120], [1, 0])

  const imgStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  }

  return (
    <section
      ref={containerRef}
      style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}
    >
      {/* Day image — base layer */}
      <img src={heroDay} alt="" aria-hidden="true" style={{ ...imgStyle, zIndex: 0 }} />

      {/* Night image — fades in via wrapper div */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: nightOpacity,
        }}
      >
        <img src={heroNight} alt="" aria-hidden="true" style={{ ...imgStyle, zIndex: 0 }} />
      </motion.div>

      {/* Gradient overlay for text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'linear-gradient(to bottom, rgba(13,15,18,0.45) 0%, rgba(13,15,18,0.20) 50%, rgba(13,15,18,0.70) 100%)',
        }}
      />

      {/* Text content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 1.5rem',
        }}
      >
        {/* Day headline */}
        <motion.h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            letterSpacing: '-0.02em',
            color: '#F5F7F8',
            lineHeight: 1.05,
            position: 'absolute',
            width: '100%',
            padding: '0 1.5rem',
            opacity: dayHeadlineOpacity,
          }}
        >
          Nature, refined by science.
        </motion.h1>

        {/* Night headline */}
        <motion.h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            letterSpacing: '-0.02em',
            color: '#00F2FF',
            lineHeight: 1.05,
            position: 'absolute',
            width: '100%',
            padding: '0 1.5rem',
            opacity: nightHeadlineOpacity,
          }}
        >
          The light of the future.
        </motion.h1>

        {/* Spacer to push sub-content below absolute headlines */}
        <div style={{ height: 'clamp(3rem, 8vw, 6.5rem)' }} />

        {/* Sub-headline */}
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'rgba(245,247,248,0.55)',
            marginTop: '1.5rem',
            maxWidth: '520px',
          }}
        >
          Atmospheric Engineering for the spaces you inhabit.
        </p>

        {/* CTA */}
        <motion.a
          href="#systems"
          style={{
            display: 'inline-block',
            marginTop: '2.5rem',
            background: '#00F2FF',
            color: '#0D0F12',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            borderRadius: '2px',
            padding: '0.75rem 2rem',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(0,242,255,0.45)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          Explore Systems
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          x: '-50%',
          zIndex: 4,
          opacity: scrollIndicatorOpacity,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="rgba(245,247,248,0.45)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
