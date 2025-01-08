import { Project } from "@/types/data"

export const projects: Project[] = [
  {
    id: "CPEC-001",
    name: "Porto de Gwadar",
    type: "infrastructure",
    status: "completed",
    investment: 1200000000,
    startYear: 2013,
    completionYear: 2022,
    description: "Porto de águas profundas estratégico no Paquistão, parte crucial do Corredor Econômico China-Paquistão",
    location: {
      country: "Paquistão",
      coordinates: [25.1206, 62.3228]
    },
    impacts: {
      economic: [
        "Aumento da capacidade de comércio marítimo em 400 milhões de toneladas",
        "Criação de zona econômica especial",
        "Geração de 12.000 empregos diretos"
      ],
      social: [
        "Desenvolvimento urbano da região",
        "Melhorias em infraestrutura local",
        "Programas de treinamento profissional"
      ],
      environmental: [
        "Implementação de tecnologias verdes",
        "Proteção da costa marítima",
        "Sistema moderno de gestão de resíduos"
      ]
    },
    timeline: [
      { year: 2013, event: "Início da construção" },
      { year: 2016, event: "Conclusão da fase 1" },
      { year: 2022, event: "Conclusão do projeto" }
    ]
  },
  {
    id: "HSRW-001",
    name: "Ferrovia Jacarta-Bandung",
    type: "transport",
    status: "ongoing",
    investment: 5500000000,
    startYear: 2016,
    description: "Primeira ferrovia de alta velocidade da Indonésia, conectando Jacarta a Bandung",
    location: {
      country: "Indonésia",
      coordinates: [-6.2088, 106.8456]
    },
    impacts: {
      economic: [
        "Redução do tempo de viagem de 3h para 40min",
        "Desenvolvimento de corredores econômicos",
        "Aumento do turismo regional"
      ],
      social: [
        "Melhoria da mobilidade urbana",
        "Integração de comunidades",
        "Transferência de tecnologia"
      ],
      environmental: [
        "Redução de emissões de CO2",
        "Uso de energia limpa",
        "Preservação de áreas verdes"
      ]
    },
    timeline: [
      { year: 2016, event: "Início do projeto" },
      { year: 2019, event: "50% da construção" },
      { year: 2023, event: "Testes operacionais" }
    ]
  },
  {
    id: "ECRL-001",
    name: "East Coast Rail Link",
    type: "transport",
    status: "ongoing",
    investment: 12800000000,
    startYear: 2017,
    description: "Linha ferroviária conectando a costa leste e oeste da Malásia",
    location: {
      country: "Malásia",
      coordinates: [3.1390, 101.6869]
    },
    impacts: {
      economic: [
        "Integração econômica entre regiões",
        "Aumento do comércio interno",
        "Desenvolvimento de hubs logísticos"
      ],
      social: [
        "Criação de 23.000 empregos",
        "Melhoria do transporte público",
        "Desenvolvimento de áreas rurais"
      ],
      environmental: [
        "Redução do tráfego rodoviário",
        "Menor emissão de carbono",
        "Proteção de áreas sensíveis"
      ]
    },
    timeline: [
      { year: 2017, event: "Início da construção" },
      { year: 2021, event: "Revisão do projeto" },
      { year: 2024, event: "Previsão de conclusão" }
    ]
  },
  {
    id: "PIRAEUS-001",
    name: "Porto de Pireu",
    type: "infrastructure",
    status: "completed",
    investment: 3500000000,
    startYear: 2009,
    completionYear: 2021,
    description: "Modernização e expansão do maior porto da Grécia, transformando-o em um hub logístico crucial para o Mediterrâneo",
    location: {
      country: "Grécia",
      coordinates: [37.9465, 23.6331]
    },
    impacts: {
      economic: [
        "Aumento da capacidade de contêineres para 10 milhões TEU/ano",
        "Criação do maior porto do Mediterrâneo",
        "Hub logístico para Europa do Sul"
      ],
      social: [
        "Geração de 3.000 empregos diretos",
        "Desenvolvimento da economia local",
        "Melhoria da infraestrutura portuária"
      ],
      environmental: [
        "Modernização de sistemas de gestão ambiental",
        "Redução de emissões por container",
        "Proteção do ecossistema marinho"
      ]
    },
    timeline: [
      { year: 2009, event: "Início da concessão" },
      { year: 2016, event: "Aquisição majoritária pela COSCO" },
      { year: 2021, event: "Conclusão da expansão" }
    ]
  },
  {
    id: "SUEZ-001",
    name: "Zona Econômica do Canal de Suez",
    type: "infrastructure",
    status: "ongoing",
    investment: 8500000000,
    startYear: 2018,
    description: "Desenvolvimento de uma zona econômica especial ao longo do Canal de Suez",
    location: {
      country: "Egito",
      coordinates: [30.5852, 32.2654]
    },
    impacts: {
      economic: [
        "Criação de hub industrial e logístico",
        "Atração de investimentos internacionais",
        "Desenvolvimento do comércio marítimo"
      ],
      social: [
        "Criação de 40.000 empregos",
        "Desenvolvimento urbano planejado",
        "Transferência de tecnologia"
      ],
      environmental: [
        "Implementação de energia renovável",
        "Gestão sustentável de recursos",
        "Proteção do ecossistema local"
      ]
    },
    timeline: [
      { year: 2018, event: "Início do desenvolvimento" },
      { year: 2021, event: "Conclusão da primeira fase" },
      { year: 2025, event: "Previsão de conclusão total" }
    ]
  }
] 