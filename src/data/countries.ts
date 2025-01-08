import { CountryData } from "@/types/data"

export const countries: CountryData[] = [
  {
    id: "CN",
    name: "China",
    region: "Asia",
    coordinates: [35.8617, 104.1954],
    projects: 15,
    investment: 500000000000,
    stats: {
      gdpImpact: 0.8,
      jobsCreated: 150000,
      tradeVolume: 800000000000
    }
  },
  {
    id: "KZ",
    name: "Kazakhstan",
    region: "Central Asia",
    coordinates: [48.0196, 66.9237],
    projects: 8,
    investment: 150000000000,
    stats: {
      gdpImpact: 1.2,
      jobsCreated: 50000,
      tradeVolume: 200000000000
    }
  },
  {
    id: "RU",
    name: "Russia",
    region: "Eurasia",
    coordinates: [61.5240, 105.3188],
    projects: 6,
    investment: 200000000000,
    stats: {
      gdpImpact: 0.5,
      jobsCreated: 75000,
      tradeVolume: 300000000000
    }
  },
  {
    id: "TR",
    name: "Turkey",
    region: "Middle East",
    coordinates: [38.9637, 35.2433],
    projects: 10,
    investment: 100000000000,
    stats: {
      gdpImpact: 0.9,
      jobsCreated: 45000,
      tradeVolume: 150000000000
    }
  },
  {
    id: "PK",
    name: "Pakistan",
    region: "South Asia",
    coordinates: [30.3753, 69.3451],
    projects: 7,
    investment: 80000000000,
    stats: {
      gdpImpact: 1.5,
      jobsCreated: 60000,
      tradeVolume: 120000000000
    }
  }
] 