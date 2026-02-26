import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How is the Vora system installed?',
    answer:
      'Vora installations are carried out by our certified integration partners. The process begins with a spatial survey and environmental assessment, followed by precision mounting of modular panels into wall, ceiling, or floor cavities. Most residential installations are completed within two to three days, with zero disruption to finished surfaces.',
  },
  {
    question: 'Does it require ongoing maintenance?',
    answer:
      'The system is engineered for autonomous operation. Vora OS monitors all subsystems continuously and initiates self-calibration cycles without user intervention. A scheduled service visit once per year is recommended for nutrient replenishment and sensor verification — all other maintenance is handled remotely by our engineering team.',
  },
  {
    question: 'Can it be configured for any room size?',
    answer:
      'Yes. The modular architecture scales linearly — from a single-room installation to a multi-floor estate. Our Configurator calculates the precise panel count, airflow routing, and flora selection required for your exact cubic meterage and occupancy profile.',
  },
  {
    question: 'How does Vora OS connect to my smart home?',
    answer:
      'Vora OS exposes a full REST API and supports native integration with Matter, HomeKit, KNX, Crestron, and Lutron ecosystems. All data remains on your local network by default — cloud connectivity is optional and subject to your privacy preferences. Custom API access is available for bespoke integrations.',
  },
  {
    question: 'What flora is compatible with the system?',
    answer:
      'Vora is pre-validated with over 140 species, including tropical, subtropical, and temperate varieties. Our environmental profiling engine selects flora that are optimally suited to your light exposure, humidity targets, and aesthetic brief. Custom species requests can be evaluated by our botanical consultants.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '1rem',
            color: '#F5F7F8',
            lineHeight: 1.5,
          }}
        >
          {question}
        </span>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 400,
            fontSize: '1.25rem',
            color: '#00F2FF',
            flexShrink: 0,
            lineHeight: 1,
            width: '20px',
            textAlign: 'center',
          }}
        >
          {open ? '−' : '+'}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.9375rem',
                lineHeight: 1.75,
                color: 'rgba(245,247,248,0.55)',
                paddingBottom: '1.5rem',
                maxWidth: '720px',
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section
      style={{
        background: '#111318',
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
            marginBottom: '3rem',
          }}
        >
          Common questions.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
