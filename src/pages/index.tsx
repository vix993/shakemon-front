import { Header } from '../components/Header'
import { MainDisplay } from '../components/MainDisplay'

export default function Home() {
  return (
    <main className='w-screen'>
      <Header></Header>
      <section>
        <MainDisplay />
      </section>
    </main>
  )
}
