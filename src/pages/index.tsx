import { Header } from '../components/Header'
import { MainDisplay } from '../components/MainDisplay'
import { ShakemonProvider } from '../context/ShakemonContext'

export default function Home() {
  return (
    <main className='w-screen'>
      <Header></Header>
      <section>
        <ShakemonProvider>
          <MainDisplay />
        </ShakemonProvider>
      </section>
    </main>
  )
}
