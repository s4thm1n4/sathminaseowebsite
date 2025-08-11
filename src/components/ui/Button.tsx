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
        'font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg',
        {
          'btn-primary': variant === 'primary',
          'btn-secondary': variant === 'secondary',
          'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white': variant === 'outline',
          'py-2 px-4 text-sm': size === 'sm',
          'py-3 px-6 text-base': size === 'md',
          'py-4 px-8 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
