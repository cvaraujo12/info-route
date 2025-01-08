import { FC, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
}

export const ResponsiveContainer: FC<ResponsiveContainerProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn(
      'w-full mx-auto px-4 sm:px-6 lg:px-8',
      'max-w-7xl transition-all duration-200',
      className
    )}>
      {children}
    </div>
  )
} 