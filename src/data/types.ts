export interface Country {
  id: string
  name: string
  region: string
  coordinates: [number, number]
  projects: number
  investment: number
}

export interface Project {
  id: string
  name: string
  country: string
  type: 'infrastructure' | 'energy' | 'trade' | 'other'
  value: number
  status: 'planned' | 'ongoing' | 'completed'
  startDate: string
  endDate?: string
}

export interface Statistics {
  totalInvestment: number
  totalProjects: number
  countriesInvolved: number
  lastUpdated: string
}

export interface DataValidation {
  isValid: boolean
  errors?: string[]
  timestamp: string
} 