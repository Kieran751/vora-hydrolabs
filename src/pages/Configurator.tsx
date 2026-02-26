import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Config } from '../types/configurator'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConfigOptions from '../components/configurator/ConfigOptions'
import VoraScene from '../components/configurator/VoraScene'
import ConfigSummary from '../components/configurator/ConfigSummary'

const defaultConfig: Config = {
  panels: '1',
  roomSize: 'medium',
  flora: 'tropical',
  lighting: 'ambient',
  finish: 'matte-black',
}

export default function Configurator() {
  const [config, setConfig] = useState<Config>(defaultConfig)

  return (
    <>
      <Navbar />
      <main style={{ background: '#0D0F12', minHeight: '100vh', paddingTop: '64px' }}>

        {/* Page header */}
        <div
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '3rem 1.5rem 2rem',
          }}
        >
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#00F2FF',
                  marginBottom: '0.625rem',
                }}
              >
                System Configurator
              </p>
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  letterSpacing: '-0.02em',
                  color: '#F5F7F8',
                  lineHeight: 1.05,
                  marginBottom: '0.75rem',
                }}
              >
                Design Your Atmosphere.
              </h1>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.9375rem',
                  color: 'rgba(245,247,248,0.50)',
                  lineHeight: 1.75,
                  maxWidth: '540px',
                }}
              >
                Select your panel layout, flora profile, lighting mode, and frame finish. The preview updates in real time.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Three-column configurator layout */}
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '2rem 1.5rem 4rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.25rem',
            alignItems: 'start',
          }}
          className="configurator-grid"
        >
          {/* Left: Options */}
          <div className="config-options-col">
            <ConfigOptions config={config} onChange={setConfig} />
          </div>

          {/* Centre: 3D Scene */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '2px',
              overflow: 'hidden',
              height: 'clamp(320px, 48vw, 560px)',
              background: '#0D0F12',
              position: 'relative',
            }}
            className="config-scene-col"
          >
            <VoraScene config={config} />

            {/* Corner label */}
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                pointerEvents: 'none',
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.625rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(245,247,248,0.25)',
                }}
              >
                Drag to rotate
              </p>
            </div>
          </motion.div>

          {/* Right: Summary */}
          <div className="config-summary-col">
            <ConfigSummary config={config} />
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @media (min-width: 1024px) {
          .configurator-grid {
            grid-template-columns: 300px 1fr 272px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .configurator-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .config-options-col {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </>
  )
}
