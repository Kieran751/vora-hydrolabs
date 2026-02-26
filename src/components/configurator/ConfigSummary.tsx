import { motion } from 'framer-motion'
import type { Config } from '../../types/configurator'
import { deriveMetrics, labelMap } from '../../types/configurator'

interface Props {
  config: Config
}

function DataRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '0.75rem 1.25rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        gap: '1rem',
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: '0.6875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'rgba(245,247,248,0.40)',
          flexShrink: 0,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontVariantNumeric: 'tabular-nums',
          fontWeight: accent ? 600 : 400,
          fontSize: accent ? '0.9375rem' : '0.875rem',
          color: accent ? '#F5F7F8' : 'rgba(245,247,248,0.80)',
          textAlign: 'right',
        }}
      >
        {value}
      </p>
    </div>
  )
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: '0.625rem 1.25rem 0.375rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: '0.625rem',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'rgba(245,247,248,0.22)',
        }}
      >
        {label}
      </p>
    </div>
  )
}

export default function ConfigSummary({ config }: Props) {
  const metrics = deriveMetrics(config)

  const mailBody = [
    `Panel Layout: ${metrics.panelCount} panel${metrics.panelCount > 1 ? 's' : ''}`,
    `Room Size: ${labelMap[config.roomSize]}`,
    `Flora Type: ${labelMap[config.flora]}`,
    `Lighting Mode: ${labelMap[config.lighting]}`,
    `Frame Finish: ${labelMap[config.finish]}`,
    ``,
    `Coverage Area: ${metrics.coverageArea}m²`,
    `O₂ Output: ${metrics.o2Output} L/hr`,
    `System Dimensions: ${metrics.systemWidth} × ${metrics.systemHeight}`,
  ].join('\n')

  const mailto = `mailto:hello@vorahydrolabs.com?subject=System Configuration Request&body=${encodeURIComponent(mailBody)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        delay: 0.1,
      }}
      style={{
        background: '#111318',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '1.125rem 1.25rem 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '0.6875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(245,247,248,0.40)',
          }}
        >
          System Summary
        </p>
      </div>

      <SectionDivider label="Selected Options" />
      <DataRow label="Layout" value={`${metrics.panelCount} Panel${metrics.panelCount > 1 ? 's' : ''}`} accent />
      <DataRow label="Room" value={labelMap[config.roomSize]} />
      <DataRow label="Flora" value={labelMap[config.flora]} />
      <DataRow label="Lighting" value={labelMap[config.lighting]} />
      <DataRow label="Finish" value={labelMap[config.finish]} accent />

      <SectionDivider label="Derived Metrics" />
      <DataRow label="Coverage" value={`${metrics.coverageArea} m²`} />
      <DataRow label="O₂ Output" value={`${metrics.o2Output} L/hr`} />
      <DataRow label="Width" value={metrics.systemWidth} />
      <DataRow label="Height" value={metrics.systemHeight} />
      <DataRow label="Install" value={metrics.installDays} />

      {/* CTA */}
      <div style={{ padding: '1.25rem' }}>
        <motion.a
          href={mailto}
          style={{
            display: 'block',
            textAlign: 'center',
            background: '#00F2FF',
            color: '#0D0F12',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '0.8125rem',
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
          Request My System
        </motion.a>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '0.6875rem',
            color: 'rgba(245,247,248,0.30)',
            textAlign: 'center',
            marginTop: '0.75rem',
            lineHeight: 1.5,
          }}
        >
          Your configuration will be sent to our installation team.
        </p>
      </div>
    </motion.div>
  )
}
