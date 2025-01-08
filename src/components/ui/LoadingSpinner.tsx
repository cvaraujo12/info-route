import { FC } from 'react'
import { cn } from '@/utils/cn'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ 
  size = 'md',
  className 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={cn('relative', className)}>
      <div className={cn(
        'animate-spin rounded-full border-2',
        'border-primary border-t-transparent',
        sizeClasses[size]
      )} />
    </div>
  )
} 