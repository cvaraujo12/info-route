import { Project, CountryData } from "@/types/data"

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Porto de Gwadar",
    type: "infrastructure",
    status: "completed",
    investment: 1200000000,
    startYear: 2013,
    completionYear: 2016,
    description: "Desenvolvimento do porto estratégico de Gwadar no Paquistão",
    location: {
      country: "Paquistão",
      coordinates: [25.1216, 62.3187]
    },
    impacts: {
      economic: [
        "Aumento do comércio marítimo",
        "Criação de empregos locais"
      ],
      social: [
        "Desenvolvimento urbano",
        "Melhoria da infraestrutura local"
      ],
      environmental: [
        "Implementação de medidas de proteção marinha",
        "Uso de tecnologias sustentáveis"
      ]
    },
    timeline: [
      {
        year: 2013,
        event: "Início da construção"
      },
      {
        year: 2015,
        event: "Conclusão da fase 1"
      },
      {
        year: 2016,
        event: "Inauguração oficial"
      }
    ]
  },
  {
    id: "2",
    name: "Ferrovia China-Laos",
    type: "transport",
    status: "ongoing",
    investment: 5950000000,
    startYear: 2016,
    description: "Construção de linha férrea conectando China e Laos",
    location: {
      country: "Laos",
      coordinates: [19.8563, 102.4955]
    },
    impacts: {
      economic: [
        "Aumento do comércio regional",
        "Desenvolvimento econômico"
      ],
      social: [
        "Melhoria da mobilidade",
        "Integração regional"
      ],
      environmental: [
        "Redução de emissões",
        "Preservação de áreas verdes"
      ]
    },
    timeline: [
      {
        year: 2016,
        event: "Início do projeto"
      },
      {
        year: 2019,
        event: "50% concluído"
      },
      {
        year: 2021,
        event: "Testes operacionais"
      }
    ]
  }
]

export const mockCountries: CountryData[] = [
  {
    id: "1",
    name: "China",
    region: "Ásia Oriental",
    projectCount: 150,
    totalInvestment: 890000000000,
    coordinates: [35.8617, 104.1954],
    keyProjects: mockProjects,
    stats: {
      gdpImpact: 2.5,
      jobsCreated: 500000,
      tradeVolume: 1200000000000
    }
  },
  {
    id: "2",
    name: "Paquistão",
    region: "Sul da Ásia",
    projectCount: 45,
    totalInvestment: 62000000000,
    coordinates: [30.3753, 69.3451],
    keyProjects: mockProjects,
    stats: {
      gdpImpact: 3.8,
      jobsCreated: 120000,
      tradeVolume: 280000000000
    }
  }
] 