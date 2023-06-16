import React from 'react'
import Text from '../Text'
import { IHomeCrousalProps } from './types'

const HomeCrousal: React.FC<IHomeCrousalProps> = ({ data }) => {
  const imgOnePath = "/assets/images/crousal-img-one.png"
  const imgTwoPath = "/assets/images/crousal-img-two.png"

  return (
    <div className='bg-contain bg-top	 bg-no-repeat w-[100%] h-[100vh]' style={{ backgroundImage: `url(${data.image})` }}>
      <div className='relative'>
        {data.image === imgOnePath && (
          <div className='flex flex-col items-center w-[max-content] absolute top-[250px] right-[350px]' >
            <Text className="text-[50px] text-[#000] font-bold">
              New Product <span className='text-[#ff4136]'>Collection</span>
            </Text>
            <Text variant="contrast" className="text-[#333333]" > SHOP NOW - </Text>
          </div>
        )}
        {
          data.image === imgTwoPath && (
            <div className='flex flex-col items-center w-[max-content] absolute top-[250px] left-[350px]' >
              <Text className="text-[50px] text-[#000] font-bold">
                Featured <span className='text-[#ff4136]'>Collection</span>
              </Text>
              <Text variant="contrast" className="text-[#333333]" > SHOP NOW - </Text>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HomeCrousal