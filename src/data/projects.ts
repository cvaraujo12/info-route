import { Project } from '@/types/data'

export const projects: Project[] = [
  {
    id: 'cpec-001',
    name: 'Corredor Econômico China-Paquistão',
    type: 'infrastructure',
    status: 'ongoing',
    investment: 62000000000,
    startYear: 2013,
    completionYear: 2030,
    description: 'Um dos maiores projetos da Nova Rota da Seda, conectando o oeste da China ao Porto de Gwadar no Paquistão.',
    location: {
      country: 'pk',
      coordinates: [30.3753, 69.3451]
    },
    timeline: [
      {
        year: 2013,
        event: 'Início do projeto'
      },
      {
        year: 2015,
        event: 'Início da construção do Porto de Gwadar'
      },
      {
        year: 2020,
        event: 'Conclusão da primeira fase'
      }
    ],
    impacts: {
      economic: 15000000000,
      social: 70000,
      environmental: 2500000
    }
  },
  {
    id: 'khorgos-001',
    name: 'Porto Seco de Khorgos',
    type: 'transport',
    status: 'completed',
    investment: 3500000000,
    startYear: 2014,
    completionYear: 2018,
    description: 'Principal hub logístico entre China e Cazaquistão, facilitando o transporte ferroviário entre Ásia e Europa.',
    location: {
      country: 'kz',
      coordinates: [44.2567, 80.2667]
    },
    timeline: [
      {
        year: 2014,
        event: 'Início da construção'
      },
      {
        year: 2016,
        event: 'Conclusão da infraestrutura básica'
      },
      {
        year: 2018,
        event: 'Inauguração oficial'
      }
    ],
    impacts: {
      economic: 5000000000,
      social: 25000,
      environmental: 1200000
    }
  },
  {
    id: 'moscow-kazan-001',
    name: 'Ferrovia de Alta Velocidade Moscou-Kazan',
    type: 'transport',
    status: 'ongoing',
    investment: 21500000000,
    startYear: 2019,
    description: 'Linha ferroviária de alta velocidade conectando Moscou a Kazan, reduzindo o tempo de viagem de 12 para 3.5 horas.',
    location: {
      country: 'ru',
      coordinates: [55.7558, 37.6173]
    },
    timeline: [
      {
        year: 2019,
        event: 'Aprovação do projeto'
      },
      {
        year: 2020,
        event: 'Início das obras'
      }
    ],
    impacts: {
      economic: 8000000000,
      social: 45000,
      environmental: 1800000
    }
  }
] 