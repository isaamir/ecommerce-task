import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    // </main>
    <div>
      <Footer />
      <div className='wrapper'>
      <Card />
      </div>
      
    </div>
  )
}
export default Home