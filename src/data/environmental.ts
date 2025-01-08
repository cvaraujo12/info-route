import { EnvironmentalData } from '@/types/data'

export const environmentalData: EnvironmentalData[] = [
  {
    year: 2020,
    emissions: {
      total: 1200000,
      byRegion: {
        asia: 600000,
        europe: 300000,
        africa: 200000,
        americas: 100000
      }
    },
    regions: {
      asia: 'Ásia',
      africa: 'África',
      europe: 'Europa',
      americas: 'Américas'
    }
  },
  {
    year: 2021,
    emissions: {
      total: 1100000,
      byRegion: {
        asia: 550000,
        europe: 275000,
        africa: 175000,
        americas: 100000
      }
    },
    regions: {
      asia: 'Ásia',
      africa: 'África',
      europe: 'Europa',
      americas: 'Américas'
    }
  },
  {
    year: 2022,
    emissions: {
      total: 1000000,
      byRegion: {
        asia: 500000,
        europe: 250000,
        africa: 150000,
        americas: 100000
      }
    },
    regions: {
      asia: 'Ásia',
      africa: 'África',
      europe: 'Europa',
      americas: 'Américas'
    }
  }
] 