import { CountryData } from "@/types/data"

export const countries: CountryData[] = [
  {
    id: "cn",
    name: "China",
    region: "Ásia",
    projectCount: 15,
    totalInvestment: 50000000000,
    coordinates: [35.8617, 104.1954],
    stats: {
      gdpImpact: 2.5,
      jobsCreated: 500000,
      tradeVolume: 1200000000000
    }
  },
  {
    id: "pk",
    name: "Paquistão",
    region: "Ásia",
    projectCount: 8,
    totalInvestment: 25000000000,
    coordinates: [30.3753, 69.3451],
    stats: {
      gdpImpact: 3.8,
      jobsCreated: 120000,
      tradeVolume: 280000000000
    }
  },
  {
    id: "kz",
    name: "Cazaquistão",
    region: "Ásia Central",
    projectCount: 6,
    totalInvestment: 15000000000,
    coordinates: [48.0196, 66.9237],
    stats: {
      gdpImpact: 4.2,
      jobsCreated: 80000,
      tradeVolume: 150000000000
    }
  },
  {
    id: "ru",
    name: "Rússia",
    region: "Eurásia",
    projectCount: 10,
    totalInvestment: 35000000000,
    coordinates: [61.5240, 105.3188],
    stats: {
      gdpImpact: 1.8,
      jobsCreated: 250000,
      tradeVolume: 850000000000
    }
  },
  {
    id: "tr",
    name: "Turquia",
    region: "Eurásia",
    projectCount: 7,
    totalInvestment: 20000000000,
    coordinates: [38.9637, 35.2433],
    stats: {
      gdpImpact: 2.9,
      jobsCreated: 150000,
      tradeVolume: 320000000000
    }
  }
] 