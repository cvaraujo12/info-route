import { FC, ReactNode } from "react"
import { motion } from "framer-motion"

interface CardProps {
  title: string
  children: ReactNode
  className?: string
  role?: string
  "aria-label"?: string
}

export const Card: FC<CardProps> = ({ 
  title, 
  children, 
  className = "",
  role,
  "aria-label": ariaLabel
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  )
} 