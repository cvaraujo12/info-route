"use client"

import { FC, ReactNode, Suspense, lazy } from 'react'
import { Card } from '../ui/Card'
import { LoadingSpinner } from '../ui/LoadingSpinner'
import { cn } from '@/utils/cn'

const LazyChart = lazy(() => import('./LazyChart'))

interface ChartCardProps {
  title: string
  subtitle?: string
  loading?: boolean
  children: ReactNode
  className?: string
  chartData?: any
  onRefresh?: () => void
  expandable?: boolean
}

export const ChartCard: FC<ChartCardProps> = ({
  title,
  subtitle,
  loading = false,
  children,
  className,
  chartData,
  onRefresh,
  expandable = false
}) => {
  return (
    <Card 
      title={title} 
      className={cn('relative group', className)}
      role="region"
      aria-label={title}
    >
      {subtitle && (
        <p className="text-sm text-gray-500 mt-1 mb-4">{subtitle}</p>
      )}
      
      {onRefresh && (
        <button
          onClick={onRefresh}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Atualizar dados"
        >
          <svg 
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
            />
          </svg>
        </button>
      )}

      {loading ? (
        <div className="flex items-center justify-center h-[300px]">
          <LoadingSpinner />
        </div>
      ) : (
        <Suspense 
          fallback={
            <div className="flex items-center justify-center h-[300px]">
              <LoadingSpinner />
            </div>
          }
        >
          <div className={cn(
            'transition-all duration-200',
            expandable && 'hover:scale-[1.02] cursor-pointer'
          )}>
            {chartData ? (
              <LazyChart data={chartData} />
            ) : (
              children
            )}
          </div>
        </Suspense>
      )}
    </Card>
  )
} 