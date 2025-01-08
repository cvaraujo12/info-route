import { Project } from '@/types/data'

export const projects: Project[] = [
  {
    id: 'CPEC-001',
    name: 'China-Pakistan Economic Corridor',
    type: 'infrastructure',
    status: 'ongoing',
    value: 62000000000,
    startDate: '2015-04-20',
    endDate: '2030-12-31',
    countryId: 'PK'
  },
  {
    id: 'KTL-001',
    name: 'Kazakhstan Transit Line',
    type: 'transport',
    status: 'completed',
    value: 3500000000,
    startDate: '2017-06-15',
    endDate: '2023-12-31',
    countryId: 'KZ'
  },
  {
    id: 'RSR-001',
    name: 'Russia-Siberia Railway',
    type: 'infrastructure',
    status: 'ongoing',
    value: 21500000000,
    startDate: '2019-03-10',
    endDate: '2028-12-31',
    countryId: 'RU'
  }
] 