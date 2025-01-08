export interface CountryData {
  id: string
  name: string
  region: string
  projectCount: number
  totalInvestment: number
  coordinates: [number, number]
  keyProjects: Project[]
  stats: {
    gdpImpact: number
    jobsCreated: number
    tradeVolume: number
  }
}

export interface Project {
  id: string
  name: string
  type: 'infrastructure' | 'energy' | 'transport' | 'digital' | 'other'
  status: 'planned' | 'ongoing' | 'completed'
  investment: number
  startYear: number
  completionYear?: number
  description: string
  location: {
    country: string
    coordinates: [number, number]
  }
  impacts: {
    economic: string[]
    social: string[]
    environmental: string[]
  }
  timeline: {
    year: number
    event: string
  }[]
  relatedRoute?: string
}

export interface TradeData {
  year: number
  volume: number
  countries: {
    name: string
    value: number
  }[]
}

export interface InvestmentData {
  year: number
  total: number
  sectors: {
    name: string
    value: number
  }[]
  regions: {
    name: string
    value: number
  }[]
}

export interface EnvironmentalData {
  year: number
  metrics: {
    carbonReduction: number
    renewableEnergy: number
    greenInvestment: number
  }
  initiatives: {
    name: string
    investment: number
    description: string
    impacts: string[]
  }[]
}

export interface LandRoute {
  id: string
  name: string
  countries: string[]
  length: number
  status: 'planned' | 'under_construction' | 'operational'
  yearStarted: number
  transportTypes: ('rail' | 'road' | 'sea')[]
  keyPoints: RoutePoint[]
  statistics: {
    annualCapacity: number
    averageTransitTime: number
    costSavings: number
  }
  infrastructure: {
    railwayStations: number
    logisticsCenters: number
    customsPosts: number
  }
}

export interface RoutePoint {
  name: string
  country: string
  coordinates: [number, number]
  type: 'origin' | 'destination' | 'checkpoint'
} 