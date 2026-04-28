import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-textDark hover:-translate-y-0.5 hover:brightness-110 active:brightness-95 relative overflow-hidden before:absolute before:inset-0 before:scale-0 before:rounded-full before:bg-white/25 before:transition-transform before:duration-300 active:before:scale-[2.5]",
  secondary: 'border-2 border-accent text-accent hover:bg-accent/10',
  outline: 'border border-primary text-primary hover:bg-primary/5',
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-lg px-6 py-3 font-bold transition ${styles[variant]} focus-visible:ring-2 focus-visible:ring-accent ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
