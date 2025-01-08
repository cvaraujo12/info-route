import { TradeData } from "@/types/data"

export const tradeData: TradeData[] = [
  {
    year: 2023,
    values: {
      total: 1500000000000,
      byRegion: {
        asia: 800000000000,
        europe: 400000000000,
        africa: 200000000000,
        americas: 100000000000
      }
    },
    type: "export",
    regions: {
      asia: "Ásia",
      africa: "África",
      europe: "Europa",
      americas: "Américas"
    }
  },
  {
    year: 2023,
    values: {
      total: 1200000000000,
      byRegion: {
        asia: 600000000000,
        europe: 300000000000,
        africa: 200000000000,
        americas: 100000000000
      }
    },
    type: "import",
    regions: {
      asia: "Ásia",
      africa: "África",
      europe: "Europa",
      americas: "Américas"
    }
  }
] 