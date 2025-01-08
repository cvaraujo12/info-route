import { InvestmentData } from "@/types/data"

export const investmentData: InvestmentData[] = [
  {
    year: 2023,
    values: {
      total: 1000000000000,
      byRegion: {
        asia: 500000000000,
        europe: 250000000000,
        africa: 150000000000,
        americas: 100000000000
      }
    },
    sectors: {
      infraestrutura: 400000000000,
      energia: 300000000000,
      tecnologia: 200000000000,
      logistica: 100000000000
    },
    regions: {
      asia: 500000000000,
      europe: 250000000000,
      africa: 150000000000,
      americas: 100000000000
    }
  }
] 