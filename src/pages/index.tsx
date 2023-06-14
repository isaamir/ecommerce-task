import { Inter } from 'next/font/google'
import Footer from '../../components/Footer'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    // </main>
    <div>
      <Footer />
    </div>
  )
}
export default Home