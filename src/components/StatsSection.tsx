import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatCell {
  label: string
  value: string
  numeric: number
  suffix: string
}

const stats: StatCell[] = [
  { label: 'O2 PURITY', value: '99.1%', numeric: 99.1, suffix: '%' },
  { label: 'PH LEVEL', value: '6.7', numeric: 6.7, suffix: '' },
  { label: 'CO2 SCRUB', value: '0.03ppm', numeric: 0.03, suffix: 'ppm' },
  { label: 'HUMIDITY', value: '48.2%', numeric: 48.2, suffix: '%' },
  { label: 'TEMP', value: '21.4°C', numeric: 21.4, suffix: '°C' },
  { label: 'PARTICLES', value: '0.00/m³', numeric: 0.0, suffix: '/m³' },
]

function AnimatedNumber({
  target,
  suffix,
  delay,
  duration = 1400,
}: {
  target: number
  suffix: string
  delay: number
  duration?: number
}) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now() + delay
    const decimals = target.toString().includes('.') ? target.toString().split('.')[1].length : 0

    const step = (now: number) => {
      if (now < startTime) {
        requestAnimationFrame(step)
        return
      }
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [inView, target, delay, duration])

  const decimals = target.toString().includes('.') ? target.toString().split('.')[1].length : 0

  return (
    <span ref={ref}>
      {current.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section
      id="lab"
      style={{
        background: '#0D0F12',
        padding: '6rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(245,247,248,0.45)',
            marginBottom: '2.5rem',
          }}
        >
          Live System Data
        </motion.p>

        {/* Stats grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.1,
              }}
              viewport={{ once: true, margin: '-80px' }}
              style={{
                background: '#111318',
                padding: '2rem 1.75rem',
                boxShadow: '0 0 16px rgba(57,255,20,0.10)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(245,247,248,0.45)',
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontVariantNumeric: 'tabular-nums',
                  fontWeight: 400,
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  color: '#F5F7F8',
                  lineHeight: 1.1,
                }}
              >
                <AnimatedNumber
                  target={stat.numeric}
                  suffix={stat.suffix}
                  delay={i * 100}
                  duration={1400}
                />
              </p>
            </motion.div>
          ))}
        </div>

        {/* Simulated data label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '0.8125rem',
            color: 'rgba(245,247,248,0.35)',
            marginTop: '1.25rem',
          }}
        >
          Simulated live data from a standard Vora installation
        </motion.p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
