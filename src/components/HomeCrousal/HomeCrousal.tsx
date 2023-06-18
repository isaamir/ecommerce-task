import React from 'react'
import Text from '../Text'
import { IHomeCrousalProps } from './types'

const HomeCrousal: React.FC<IHomeCrousalProps> = ({ data }) => {
  const imgOnePath = "/assets/images/crousal-img-one.png"
  const imgTwoPath = "/assets/images/crousal-img-two.png"

  return (
    <div 
      className={'bg-cover bg-center	bg-no-repeat h-[600px]'} 
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className='relative'>
        {data.image === imgOnePath && (
          <div className='flex flex-col items-center absolute top-[230px] right-40' >
            <Text className="md:text-[50px] text-[30px] text-[#000] font-bold">
              New Product <span className='text-[#ff4136]'>Collection</span>
            </Text>
            <Text variant="contrast" className="text-[#333333] cursor-pointer" > SHOP NOW - </Text>
          </div>
        )}
        {
          data.image === imgTwoPath && (
            <div className='flex flex-col items-center w-[max-content] absolute top-[230px] left-40' >
              <Text className="md:text-[50px] text-[30px] text-[#000] font-bold">
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
