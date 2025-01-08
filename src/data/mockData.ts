import { Project, CountryData } from "@/types/data"

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Porto de Gwadar",
    type: "infrastructure",
    status: "completed",
    value: 1200000000,
    startDate: "2013-01-01",
    endDate: "2016-12-31",
    countryId: "PK"
  },
  {
    id: "2",
    name: "Ferrovia China-Laos",
    type: "infrastructure",
    status: "ongoing",
    value: 5950000000,
    startDate: "2016-01-01",
    countryId: "LA"
  }
]

export const mockCountries: CountryData[] = [
  {
    id: "CN",
    name: "China",
    region: "Ásia Oriental",
    coordinates: [35.8617, 104.1954],
    projects: 150,
    investment: 890000000000,
    stats: {
      gdpImpact: 0.025,
      jobsCreated: 500000,
      tradeVolume: 1200000000000
    }
  },
  {
    id: "PK",
    name: "Paquistão",
    region: "Sul da Ásia",
    coordinates: [30.3753, 69.3451],
    projects: 45,
    investment: 62000000000,
    stats: {
      gdpImpact: 0.038,
      jobsCreated: 120000,
      tradeVolume: 280000000000
    }
  }
] 