import React from 'react'
import Text from '@/components/Text'
import Link from 'next/link'
const ProductDetailHeader = () => {
  return (
    <div className="bg-[url('/assets/images/background.png')] bg-no-repeat bg-cover">
    <div className='flex flex-col items-center gap-y-[15px] py-[110px]'>
      <Text className="text-[36px] text-[#343434] font-normal	max-md:text-[25px]">Smart Head Cap</Text>
      <div className='flex items-center justify-between gap-[20px]'> <Link href="/" className='text-[18px] text-[#343434] pointer max-md:text-[14px]'>Home</Link> / <Text className="text-[18px] text-[#343434] max-md:text-[14px]">Smart Head Cap</Text> </div>
    </div>
  </div>
  )
}

export default ProductDetailHeader