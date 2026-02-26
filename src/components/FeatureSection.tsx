import { motion } from 'framer-motion'
import heroDay from '../assets/Gemini Generated Image (1).png'

const sectionVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      delay: i * 0.15,
    },
  }),
}

const features = [
  {
    title: 'Panel Precision',
    body: 'Each modular panel is machined to ±0.1mm tolerances, ensuring seamless alignment across any configuration.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D0F12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: 'Silent Operation',
    body: 'Acoustic dampening across all mechanical components maintains below 30dB — inaudible by design.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D0F12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
  },
  {
    title: 'Invisible Integration',
    body: 'Zero-profile mounting dissolves the system into walls and ceilings — present in atmosphere, absent in form.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D0F12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
]

export default function FeatureSection() {
  return (
    <section
      id="features"
      style={{
        background: '#0D0F12',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Two-column header */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            marginBottom: '4rem',
            alignItems: 'center',
          }}
          className="feature-header-grid"
        >
          {/* Left: Copy */}
          <div>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                letterSpacing: '-0.02em',
                color: '#F5F7F8',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Modular. Intelligent. Invisible.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                color: 'rgba(245,247,248,0.65)',
                maxWidth: '480px',
              }}
            >
              The Vora system snaps together panel by panel, integrating seamlessly into any interior without compromising the architecture. Each installation is engineered to your exact spatial parameters.
            </p>
          </div>

          {/* Right: Image */}
          <div
            style={{
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              aspectRatio: '16/9',
            }}
          >
            <img
              src={heroDay}
              alt="Vora system installation"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </motion.div>

        {/* Three feature cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.25rem',
          }}
          className="feature-cards-grid"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{
                background: '#111318',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '2px',
                padding: '2rem',
              }}
            >
              {/* Hex icon container */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#00F2FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '1.0625rem',
                  color: '#F5F7F8',
                  marginBottom: '0.75rem',
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: 'rgba(245,247,248,0.55)',
                }}
              >
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .feature-header-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .feature-cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
