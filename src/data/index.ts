// Garantir que todas as exportações são estáticas
export const DATA_VERSION = '1.0.0'

// Importações estáticas para evitar problemas de build
import { statistics } from './statistics'
import { countries } from './countries'
import { projects } from './projects'
import { environmentalData } from './environmental'
import { landRoutes } from './landRoutes'
import { tradeData } from './trade'
import { investmentData } from './investment'

// Exportações tipadas
export type { DataValidation } from './types'

// Exportações de dados
export {
  statistics,
  countries,
  projects,
  environmentalData,
  landRoutes,
  tradeData,
  investmentData
} 