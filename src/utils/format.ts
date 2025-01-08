const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
})

const numberFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
})

export function formatCurrency(value: number): string {
  if (value >= 1000000000000) {
    return `US$ ${(value / 1000000000000).toFixed(1)} trilhões`
  }
  if (value >= 1000000000) {
    return `US$ ${(value / 1000000000).toFixed(1)} bilhões`
  }
  if (value >= 1000000) {
    return `US$ ${(value / 1000000).toFixed(1)} milhões`
  }
  return currencyFormatter.format(value)
}

export function formatNumber(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`
  }
  return numberFormatter.format(value)
}

export function formatPercentage(value: number): string {
  return `${numberFormatter.format(value)}%`
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

export function formatDateShort(date: string | Date): string {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })
}

export function formatYear(date: string | Date): string {
  return new Date(date).getFullYear().toString()
} 