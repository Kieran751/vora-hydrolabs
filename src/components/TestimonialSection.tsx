import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      '"The installation is entirely invisible. Our architect assumed the panels were a bespoke millwork feature — they had no idea it was an atmospheric system. It preserves the interior exactly as designed, while fundamentally changing the quality of the air."',
    name: 'T. Nakamura',
    descriptor: 'Private Residence, Tokyo',
  },
  {
    quote:
      '"Three months after installation, my biometrics shifted measurably — sleep depth improved, cortisol levels dropped. The flora maintained itself without intervention. The environment became an active participant in our wellbeing."',
    name: 'Dr. E. Hartmann',
    descriptor: 'Private Residence, Zurich',
  },
  {
    quote:
      '"Vora OS gives us complete autonomous control without requiring any daily interaction. The dashboard flagged a micro-humidity variance in the east wing before our building management system detected it. The system manages itself at a level of precision we couldn\'t have anticipated."',
    name: 'M. Al-Rashidi',
    descriptor: 'Private Residence, Dubai',
  },
]

export default function TestimonialSection() {
  return (
    <section
      style={{
        background: '#0D0F12',
        padding: '6rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.875rem, 4vw, 3rem)',
            letterSpacing: '-0.02em',
            color: '#F5F7F8',
            lineHeight: 1.1,
            marginBottom: '3.5rem',
          }}
        >
          Trusted by those who demand precision.
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.25rem',
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.1,
              }}
              viewport={{ once: true, margin: '-80px' }}
              style={{
                background: '#111318',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '2px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '0.9375rem',
                  lineHeight: 1.8,
                  color: 'rgba(245,247,248,0.80)',
                  flex: 1,
                }}
              >
                {t.quote}
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    color: '#F5F7F8',
                    marginBottom: '0.25rem',
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '0.8125rem',
                    color: 'rgba(245,247,248,0.45)',
                  }}
                >
                  {t.descriptor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
