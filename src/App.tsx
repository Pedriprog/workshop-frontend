import { Footer, Navbar } from '@/components/layout'
import { ScrollTopButton } from '@/components/ui'
import { HomePage } from '@/pages/HomePage'

export function App() {
  return (
    <div className="bg-white text-textDark">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <ScrollTopButton />
      <Footer />
    </div>
  )
}
