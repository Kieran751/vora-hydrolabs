export type PanelLayout = '1' | '2' | '4'
export type RoomSize = 'small' | 'medium' | 'large'
export type FloraType = 'tropical' | 'desert' | 'temperate'
export type LightingMode = 'ambient' | 'task' | 'bioluminescent'
export type FrameFinish = 'matte-black' | 'brushed-aluminium' | 'white'

export interface Config {
  panels: PanelLayout
  roomSize: RoomSize
  flora: FloraType
  lighting: LightingMode
  finish: FrameFinish
}

export interface DerivedMetrics {
  panelCount: number
  coverageArea: number
  o2Output: number
  systemWidth: string
  systemHeight: string
  installDays: string
}

export function deriveMetrics(config: Config): DerivedMetrics {
  const panelCount = parseInt(config.panels, 10)

  const coverageArea =
    config.roomSize === 'small' ? 15 :
    config.roomSize === 'medium' ? 35 : 65

  const o2Output = panelCount * 12

  const systemWidth = panelCount === 1 ? '45cm' : '95cm'
  const systemHeight = panelCount === 4 ? '175cm' : '85cm'
  const installDays = panelCount === 4 ? '2–3 days' : '1–2 days'

  return { panelCount, coverageArea, o2Output, systemWidth, systemHeight, installDays }
}

export const labelMap: Record<string, string> = {
  'matte-black': 'Matte Black',
  'brushed-aluminium': 'Brushed Aluminium',
  'white': 'White',
  'tropical': 'Tropical',
  'desert': 'Desert',
  'temperate': 'Temperate',
  'ambient': 'Ambient',
  'task': 'Task',
  'bioluminescent': 'Bioluminescent',
  'small': 'Small (≤20m²)',
  'medium': 'Medium (20–50m²)',
  'large': 'Large (50m²+)',
}
