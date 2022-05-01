import { Header } from '../components/Header'
import { MainDisplay } from '../components/MainDisplay'
import { ShakemonProvider } from '../context/ShakemonContext'

export default function Home() {
  return (
    <main className='w-screen'>
      <ShakemonProvider>
        <Header></Header>
        <section>
            <MainDisplay />
        </section>
      </ShakemonProvider>
    </main>
  )
}
