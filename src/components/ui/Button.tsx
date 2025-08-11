import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl relative overflow-hidden group',
        {
          'btn-primary': variant === 'primary',
          'btn-secondary': variant === 'secondary',
          'border-2 border-orange-500/30 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 hover:border-orange-400/50 backdrop-blur-lg bg-orange-500/5': variant === 'outline',
          'py-2 px-4 text-sm': size === 'sm',
          'py-3 px-6 text-base': size === 'md',
          'py-4 px-8 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      )}
    </button>
  )
}
