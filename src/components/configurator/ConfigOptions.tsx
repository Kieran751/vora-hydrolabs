import { motion } from 'framer-motion'
import type { Config, PanelLayout, RoomSize, FloraType, LightingMode, FrameFinish } from '../../types/configurator'

interface Props {
  config: Config
  onChange: (config: Config) => void
}

const panelOptions: { value: PanelLayout; label: string; sub: string }[] = [
  { value: '1', label: '1 Panel', sub: '45 × 85cm' },
  { value: '2', label: '2 Panels', sub: '95 × 85cm' },
  { value: '4', label: '4 Panels', sub: '95 × 175cm' },
]

const roomOptions: { value: RoomSize; label: string; sub: string }[] = [
  { value: 'small', label: 'Small', sub: '≤20m²' },
  { value: 'medium', label: 'Medium', sub: '20–50m²' },
  { value: 'large', label: 'Large', sub: '50m²+' },
]

const floraOptions: { value: FloraType; label: string; sub: string }[] = [
  { value: 'tropical', label: 'Tropical', sub: 'Dense canopy' },
  { value: 'desert', label: 'Desert', sub: 'Arid minimal' },
  { value: 'temperate', label: 'Temperate', sub: 'Balanced' },
]

const lightingOptions: { value: LightingMode; label: string; sub: string }[] = [
  { value: 'ambient', label: 'Ambient', sub: 'Warm 2700K' },
  { value: 'task', label: 'Task', sub: 'Cool 5000K' },
  { value: 'bioluminescent', label: 'Bioluminescent', sub: '520nm green' },
]

const finishOptions: { value: FrameFinish; label: string; sub: string }[] = [
  { value: 'matte-black', label: 'Matte Black', sub: '#1C1C1E' },
  { value: 'brushed-aluminium', label: 'Brushed Alu', sub: 'Natural' },
  { value: 'white', label: 'White', sub: '#EBEBEB' },
]

function OptionGroup<T extends string>({
  label,
  options,
  value,
  onSelect,
}: {
  label: string
  options: { value: T; label: string; sub: string }[]
  value: T
  onSelect: (v: T) => void
}) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: '0.6875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'rgba(245,247,248,0.40)',
          marginBottom: '0.625rem',
        }}
      >
        {label}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {options.map((opt) => {
          const isActive = opt.value === value
          return (
            <div key={opt.value} style={{ position: 'relative' }}>
              {isActive && (
                <motion.div
                  layoutId={`pill-${label}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#00F2FF',
                    borderRadius: '2px',
                    zIndex: 0,
                  }}
                  transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                />
              )}
              <button
                onClick={() => onSelect(opt.value)}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.1rem',
                  fontFamily: "'Inter', sans-serif",
                  background: 'transparent',
                  border: `1px solid ${isActive ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: '2px',
                  padding: '0.5rem 0.75rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  minWidth: '0',
                }}
              >
                <span
                  style={{
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.8125rem',
                    color: isActive ? '#0D0F12' : '#F5F7F8',
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {opt.label}
                </span>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: '0.6875rem',
                    color: isActive ? 'rgba(13,15,18,0.65)' : 'rgba(245,247,248,0.35)',
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {opt.sub}
                </span>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function ConfigOptions({ config, onChange }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
      style={{
        background: '#111318',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '2px',
        padding: '1.5rem',
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
          marginBottom: '1.5rem',
        }}
      >
        Configuration
      </p>

      <OptionGroup
        label="Panel Layout"
        options={panelOptions}
        value={config.panels}
        onSelect={(v) => onChange({ ...config, panels: v })}
      />
      <OptionGroup
        label="Room Size"
        options={roomOptions}
        value={config.roomSize}
        onSelect={(v) => onChange({ ...config, roomSize: v })}
      />
      <OptionGroup
        label="Flora Type"
        options={floraOptions}
        value={config.flora}
        onSelect={(v) => onChange({ ...config, flora: v })}
      />
      <OptionGroup
        label="Lighting Mode"
        options={lightingOptions}
        value={config.lighting}
        onSelect={(v) => onChange({ ...config, lighting: v })}
      />
      <OptionGroup
        label="Frame Finish"
        options={finishOptions}
        value={config.finish}
        onSelect={(v) => onChange({ ...config, finish: v })}
      />
    </motion.div>
  )
}
