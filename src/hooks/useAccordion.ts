import { useState } from 'react'

export function useAccordion(initialOpenId: string | null = null) {
  const [openId, setOpenId] = useState<string | null>(initialOpenId)

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return { openId, toggle }
}
