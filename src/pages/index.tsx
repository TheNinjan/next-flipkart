import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Banner from '@/components/Banner'
import Electronics from '@/components/best/Electronics'
import Suggetions from '@/components/Suggetions'
import CategoryC from '@/components/CategoryC'
import Fashion from '@/components/best/Fashion'
import Beauty from '@/components/best/Beauty'
import HomeF from '@/components/best/HomeF'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Flipkart',
  description: 'Flipkart | The Ninjan | Niranjan Solanki',
}
export default function Home() {
  return (
    <main >
      <CategoryC/>
      <Banner/>
      <Electronics/>
      <Fashion/>
      <Beauty/>
      <HomeF />
      <Suggetions/>
    </main>
  )
}
