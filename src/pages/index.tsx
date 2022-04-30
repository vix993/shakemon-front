import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <main className='w-screen'>
      <Header></Header>
      <h1 className="text-yellow-500">Hello World</h1>
    </main>
  )
}
