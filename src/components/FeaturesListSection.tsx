import { motion } from 'framer-motion'

const benefits = [
  {
    label: 'Automated Plant Care',
    description: 'Flora vitality maintained autonomously.',
  },
  {
    label: 'Silent Operation',
    description: 'Sub-30dB across all system states.',
  },
  {
    label: 'Clean Air Output',
    description: 'Molecular filtration at 99.1% O₂ purity.',
  },
  {
    label: 'Luxury Aesthetics',
    description: 'Designed to disappear into any interior.',
  },
  {
    label: 'CO₂ Scrubbing',
    description: 'Real-time atmospheric regulation.',
  },
  {
    label: 'Smart Home Ready',
    description: 'Full API and ecosystem integration.',
  },
]

export default function FeaturesListSection() {
  return (
    <section
      style={{
        background: '#111318',
        padding: '6rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.875rem, 4vw, 3rem)',
              letterSpacing: '-0.02em',
              color: '#F5F7F8',
              lineHeight: 1.1,
              marginBottom: '3.5rem',
            }}
          >
            Everything your environment deserves.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '0',
            }}
            className="benefits-grid"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                  delay: i * 0.08,
                }}
                viewport={{ once: true, margin: '-80px' }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Indicator dot */}
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#00F2FF',
                    marginTop: '0.55rem',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: '#F5F7F8',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {benefit.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '0.9375rem',
                      color: 'rgba(245,247,248,0.50)',
                      lineHeight: 1.6,
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            column-gap: 4rem;
          }
        }
      `}</style>
    </section>
  )
}
