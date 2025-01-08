export interface CountryData {
  id: string
  name: string
  region: string
  projectCount: number
  totalInvestment: number
  coordinates: [number, number]
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
  investment: number
  startYear: number
  completionYear?: number
  description: string
  location: {
    country: string
    coordinates: [number, number]
  }
  timeline: {
    year: number
    event: string
  }[]
  impacts: {
    economic: number
    social: number
    environmental: number
  }
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
  year: number
  emissions: {
    total: number
    byRegion: {
      [key: string]: number
    }
  }
  regions: {
    asia: string
    africa: string
    europe: string
    americas: string
  }
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