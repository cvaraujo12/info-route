import { LandRoute } from "@/types/data"

export const landRoutes: LandRoute[] = [
  {
    id: "NELB-001",
    name: "Nova Ponte Terrestre Eurasiática",
    countries: ["China", "Cazaquistão", "Rússia", "Bielorrússia", "Polônia", "Alemanha"],
    length: 11000, // km
    status: "operational",
    yearStarted: 2013,
    transportTypes: ["rail", "road"],
    keyPoints: [
      {
        name: "Yiwu",
        country: "China",
        coordinates: [29.3063, 120.0778],
        type: "origin"
      },
      {
        name: "Duisburg",
        country: "Alemanha",
        coordinates: [51.4344, 6.7623],
        type: "destination"
      }
    ],
    statistics: {
      annualCapacity: 540000, // TEUs por ano
      averageTransitTime: 16, // dias
      costSavings: 30 // percentual comparado ao transporte marítimo
    },
    infrastructure: {
      railwayStations: 42,
      logisticsCenters: 15,
      customsPosts: 12
    }
  },
  {
    id: "CMR-001",
    name: "Corredor China-Mongólia-Rússia",
    countries: ["China", "Mongólia", "Rússia"],
    length: 7200,
    status: "operational",
    yearStarted: 2014,
    transportTypes: ["rail"],
    keyPoints: [
      {
        name: "Tianjin",
        country: "China",
        coordinates: [39.3434, 117.3616],
        type: "origin"
      },
      {
        name: "Ulan Bator",
        country: "Mongólia",
        coordinates: [47.8864, 106.9057],
        type: "checkpoint"
      },
      {
        name: "Moscou",
        country: "Rússia",
        coordinates: [55.7558, 37.6173],
        type: "destination"
      }
    ],
    statistics: {
      annualCapacity: 320000,
      averageTransitTime: 14,
      costSavings: 25
    },
    infrastructure: {
      railwayStations: 28,
      logisticsCenters: 8,
      customsPosts: 6
    }
  },
  {
    id: "CCWA-001",
    name: "Corredor China-Ásia Central-Ásia Ocidental",
    countries: ["China", "Cazaquistão", "Uzbequistão", "Turquemenistão", "Irã", "Turquia"],
    length: 8400,
    status: "operational",
    yearStarted: 2015,
    transportTypes: ["rail", "road"],
    keyPoints: [
      {
        name: "Urumqi",
        country: "China",
        coordinates: [43.8256, 87.6168],
        type: "origin"
      },
      {
        name: "Teerã",
        country: "Irã",
        coordinates: [35.6892, 51.3890],
        type: "destination"
      }
    ],
    statistics: {
      annualCapacity: 280000,
      averageTransitTime: 18,
      costSavings: 20
    },
    infrastructure: {
      railwayStations: 35,
      logisticsCenters: 12,
      customsPosts: 10
    }
  },
  {
    id: "CPEC-001",
    name: "Corredor Econômico China-Paquistão",
    countries: ["China", "Paquistão"],
    length: 3000,
    status: "operational",
    yearStarted: 2015,
    transportTypes: ["road", "rail"],
    keyPoints: [
      {
        name: "Kashgar",
        country: "China",
        coordinates: [39.4708, 75.9897],
        type: "origin"
      },
      {
        name: "Gwadar",
        country: "Paquistão",
        coordinates: [25.1206, 62.3228],
        type: "destination"
      }
    ],
    statistics: {
      annualCapacity: 180000,
      averageTransitTime: 10,
      costSavings: 35
    },
    infrastructure: {
      railwayStations: 18,
      logisticsCenters: 9,
      customsPosts: 4
    }
  },
  {
    id: "BCIM-001",
    name: "Corredor Bangladesh-China-Índia-Myanmar",
    countries: ["China", "Myanmar", "Bangladesh", "Índia"],
    length: 2800,
    status: "under_construction",
    yearStarted: 2017,
    transportTypes: ["road", "rail"],
    keyPoints: [
      {
        name: "Kunming",
        country: "China",
        coordinates: [25.0389, 102.7183],
        type: "origin"
      },
      {
        name: "Mandalay",
        country: "Myanmar",
        coordinates: [21.9588, 96.0891],
        type: "checkpoint"
      },
      {
        name: "Dhaka",
        country: "Bangladesh",
        coordinates: [23.8103, 90.4125],
        type: "checkpoint"
      },
      {
        name: "Kolkata",
        country: "Índia",
        coordinates: [22.5726, 88.3639],
        type: "destination"
      }
    ],
    statistics: {
      annualCapacity: 240000,
      averageTransitTime: 12,
      costSavings: 28
    },
    infrastructure: {
      railwayStations: 22,
      logisticsCenters: 8,
      customsPosts: 7
    }
  },
  {
    id: "INSTC-001",
    name: "Corredor Internacional Norte-Sul",
    countries: ["Rússia", "Irã", "Azerbaijão", "Índia"],
    length: 7200,
    status: "operational",
    yearStarted: 2016,
    transportTypes: ["rail", "road", "sea"],
    keyPoints: [
      {
        name: "São Petersburgo",
        country: "Rússia",
        coordinates: [59.9311, 30.3609],
        type: "origin"
      },
      {
        name: "Baku",
        country: "Azerbaijão",
        coordinates: [40.4093, 49.8671],
        type: "checkpoint"
      },
      {
        name: "Bandar Abbas",
        country: "Irã",
        coordinates: [27.1832, 56.2666],
        type: "checkpoint"
      },
      {
        name: "Mumbai",
        country: "Índia",
        coordinates: [19.0760, 72.8777],
        type: "destination"
      }
    ],
    statistics: {
      annualCapacity: 420000,
      averageTransitTime: 20,
      costSavings: 32
    },
    infrastructure: {
      railwayStations: 38,
      logisticsCenters: 14,
      customsPosts: 9
    }
  }
] 