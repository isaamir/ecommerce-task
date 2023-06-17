import React, { useRef } from 'react'
import Text from '@/components/Text'
import Crousal from '@/components/Crousal'
import { produtList } from '@/utils/helpers/productListDummyData'
import { CrousalVarients } from '@/utils/enums'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Button from '@/components/Button'

const RelatedProducts: React.FC = () => {
  const slider = useRef(null);
  return (
    <div className='flex flex-col gap-y-[50px] items-center my-[100px]'>
      <Text size="xl" variant="dark">
          Related Product
      </Text>
      <div className="relative wrapper">
      <Crousal variant={CrousalVarients.MULTIPLE} productData={produtList} slider={slider} />

        <div className=" flex justify-between">
          <div className="absolute top-[40%] left-[-50px]">
            <Button variant="iconSlider" onClick={() => slider?.current?.slickPrev()}>
              <IoIosArrowBack size="20" color="#797D7F" />
            </Button>
          </div>

          <div className="absolute top-[40%] right-[-20px]">
            <Button variant="iconSlider" onClick={() => slider?.current?.slickNext()}>
              <IoIosArrowForward size="20" color="#797D7F" />{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts