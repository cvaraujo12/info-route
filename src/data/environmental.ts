import { EnvironmentalData } from "@/types/data"

export const environmentalData: EnvironmentalData[] = [
  {
    year: 2023,
    metrics: {
      carbonReduction: 15000000, // toneladas de CO2
      renewableEnergy: 35, // percentual de energia renovável
      greenInvestment: 150000000000 // investimento em projetos verdes
    },
    initiatives: [
      {
        name: "Green Silk Road",
        investment: 50000000000,
        description: "Iniciativa para desenvolvimento sustentável",
        impacts: [
          "Redução de 20% nas emissões de carbono",
          "Implementação de 1000 MW em energia renovável",
          "Preservação de 500.000 hectares de áreas verdes"
        ]
      },
      {
        name: "Sustainable Transport Corridor",
        investment: 35000000000,
        description: "Corredores de transporte com baixa emissão",
        impacts: [
          "Redução de 30% no consumo de combustível",
          "Implementação de 2000 km de ferrovias elétricas",
          "Modernização de 50 portos com tecnologia verde"
        ]
      }
    ]
  }
] 