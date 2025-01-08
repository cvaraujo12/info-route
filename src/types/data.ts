export interface CountryData {
  id: string
  name: string
  region: string
  coordinates: [number, number]
  projects: number
  investment: number
  stats: {
    gdpImpact: number
    jobsCreated: number
    tradeVolume: number
  }
}

export interface Project {
  id: string
  name: string
  type: string
  status: string
  value: number
  startDate: string
  endDate?: string
  countryId: string
}

export interface TradeData {
  year: number
  values: {
    total: number
    byRegion: {
      [key: string]: number
    }
  }
  type: string
  regions: {
    asia: string
    africa: string
    europe: string
    americas: string
  }
}

export interface InvestmentData {
  year: number
  values: {
    total: number
    byRegion: {
      [key: string]: number
    }
  }
  sectors: {
    [key: string]: number
  }
  regions: {
    [key: string]: number
  }
}

export interface EnvironmentalData {
  id: string
  year: number
  type: string
  value: number
  description: string
  region: string
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