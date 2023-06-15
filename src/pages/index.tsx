
import React , { useState } from "react"
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Tabs from '@/components/Tabs'
import Text from "@/components/Text"
import { TabValues } from '@/utils/enums';

const inter = Inter({ subsets: ['latin'] })


const Home = () => {
  const [selectedTabValue, setSelectedTabValue] = useState('0')

  return (
    <div>
      <Footer />
      <div className='wrapper'>
        <Card />
      <div className=" flex justify-center">
      <Tabs
          selectedTabValue={selectedTabValue}
          setSelectedTabValue={setSelectedTabValue}
          defaultTab={TabValues.ZERO}
          tabsData={[
            { tabValue: TabValues.ZERO, tabText: 'More Info' },
            { tabValue: TabValues.ONE, tabText: 'Reviews' },
            { tabValue: TabValues.TWO, tabText: 'Comments' },
            { tabValue: TabValues.THREE, tabText: 'Custom Tab-1' },
            { tabValue: TabValues.FOUR, tabText: 'Custom Tab-2' },
          ]} />
          </div>
          <div className="flex">
          {selectedTabValue === TabValues.ZERO ? (
          <Text>hi one</Text>
        ) : (
          <Text>hi two</Text>
        )}
          </div>
      </div>
      
      
    </div>
  )
}
export default Home