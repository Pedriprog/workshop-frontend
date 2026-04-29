import { Footer, Navbar } from '@/components/layout'
import { ScrollTopButton } from '@/components/ui'
import { HomePage } from '@/pages/HomePage'

export function App() {
  return (
    <div className="min-h-dvh bg-bgLight text-textDark">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <ScrollTopButton />
      <Footer />
    </div>
  )
}
