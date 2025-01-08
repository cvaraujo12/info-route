import { TradeData, InvestmentData } from "@/types/data"

export const tradeData: TradeData[] = [
  { 
    year: 2013,
    volume: 1100000000000,
    countries: [
      { name: "China", value: 450000000000 },
      { name: "ASEAN", value: 250000000000 },
      { name: "União Europeia", value: 200000000000 },
      { name: "África", value: 100000000000 },
      { name: "Ásia Central", value: 100000000000 }
    ]
  },
  { 
    year: 2018,
    volume: 1600000000000,
    countries: [
      { name: "China", value: 650000000000 },
      { name: "ASEAN", value: 350000000000 },
      { name: "União Europeia", value: 300000000000 },
      { name: "África", value: 150000000000 },
      { name: "Ásia Central", value: 150000000000 }
    ]
  },
  { 
    year: 2023,
    volume: 2100000000000,
    countries: [
      { name: "China", value: 850000000000 },
      { name: "ASEAN", value: 450000000000 },
      { name: "União Europeia", value: 400000000000 },
      { name: "África", value: 200000000000 },
      { name: "Ásia Central", value: 200000000000 }
    ]
  },
  {
    year: 2021,
    volume: 1800000000000,
    countries: [
      { name: "China", value: 750000000000 },
      { name: "ASEAN", value: 400000000000 },
      { name: "União Europeia", value: 350000000000 },
      { name: "África", value: 180000000000 },
      { name: "Ásia Central", value: 120000000000 }
    ]
  }
]

export const investmentData: InvestmentData[] = [
  {
    year: 2023,
    total: 1000000000000,
    sectors: [
      { name: "Infraestrutura", value: 400000000000 },
      { name: "Energia", value: 250000000000 },
      { name: "Transporte", value: 200000000000 },
      { name: "Digital", value: 100000000000 },
      { name: "Outros", value: 50000000000 }
    ],
    regions: [
      { name: "Ásia", value: 500000000000 },
      { name: "África", value: 200000000000 },
      { name: "Europa", value: 200000000000 },
      { name: "América Latina", value: 100000000000 }
    ]
  },
  {
    year: 2022,
    total: 900000000000,
    sectors: [
      { name: "Infraestrutura", value: 350000000000 },
      { name: "Energia", value: 225000000000 },
      { name: "Transporte", value: 180000000000 },
      { name: "Digital", value: 95000000000 },
      { name: "Outros", value: 50000000000 }
    ],
    regions: [
      { name: "Ásia", value: 450000000000 },
      { name: "África", value: 180000000000 },
      { name: "Europa", value: 180000000000 },
      { name: "América Latina", value: 90000000000 }
    ]
  },
  {
    year: 2021,
    total: 850000000000,
    sectors: [
      { name: "Infraestrutura", value: 320000000000 },
      { name: "Energia", value: 210000000000 },
      { name: "Transporte", value: 170000000000 },
      { name: "Digital", value: 100000000000 },
      { name: "Outros", value: 50000000000 }
    ],
    regions: [
      { name: "Ásia", value: 420000000000 },
      { name: "África", value: 170000000000 },
      { name: "Europa", value: 170000000000 },
      { name: "América Latina", value: 90000000000 }
    ]
  }
] 