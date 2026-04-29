import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

const styles: Record<Variant, string> = {
  primary:
    'bg-accent text-textDark hover:bg-accent-hover active:bg-accent-hover/90',
  secondary: 'border-2 border-accent text-accent hover:bg-accent/10 active:bg-accent/15',
  outline: 'border border-primary text-primary hover:bg-primary/8 active:bg-primary/12',
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-lg px-6 py-3 font-bold transition-colors duration-200 ${styles[variant]} focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-55 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
