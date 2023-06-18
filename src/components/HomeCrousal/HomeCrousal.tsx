import React from 'react'
import Text from '../Text'
import { IHomeCrousalProps } from './types'

const HomeCrousal: React.FC<IHomeCrousalProps> = ({ data }) => {
  const imgOnePath = "/assets/images/crousal-img-one.png"
  const imgTwoPath = "/assets/images/crousal-img-two.png"

  return (
    <div 
      className={'bg-cover bg-center	bg-no-repeat h-[700px]'} 
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className='relative'>
        {data.image === imgOnePath && (
          <div className='flex flex-col items-center absolute top-[280px] right-[50%] translate-x-[50%] md:right-60 md:translate-x-0' >
            <Text className="md:text-[50px] text-[30px] text-[#000] font-bold whitespace-nowrap">
              New Product <span className='text-[#ff4136]'>Collection</span>
            </Text>
            <Text variant="contrast" className="text-[#333333] cursor-pointer" > SHOP NOW - </Text>
          </div>
        )}
        {
          data.image === imgTwoPath && (
            <div className='flex flex-col items-center w-[max-content] absolute top-[280px] left-[50%] translate-x-[-50%] md:left-60 md:translate-x-0' >
              <Text className="md:text-[50px] text-[30px] text-[#000] font-bold whitespace-nowrap">
                Featured <span className='text-[#ff4136]'>Collection</span>
              </Text>
              <Text variant="contrast" className="text-[#333333] cursor-pointer" > SHOP NOW - </Text>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HomeCrousal
