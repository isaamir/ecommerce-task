
'use client';

import React from 'react';
import Slider from 'react-slick';
import Card from '../Card';
import HomeCrousal from '../HomeCrousal';
import { CrousalVarients } from '@/utils/enums';
import { ICrousalProps } from './types';

const Crousal: React.FC<ICrousalProps> = ({ variant, productData, homeData, slider }) => {
  
  const style = {
    [CrousalVarients.SINGLE]: {
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1
    },
    [CrousalVarients.MULTIPLE]: {
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }
  }

  const classes = style[variant || CrousalVarients.SINGLE]

  var settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    ...classes
  };

  return (
    <Slider {...settings} ref={slider}>

			{productData && productData.map((data, ind) => (
				<div className="pr-5">
					<Card key={ind} data={data} />
				</div>
			))}

      {homeData && homeData.map((data, ind) => (
        <HomeCrousal key={ind} data={data} />
      ))}

    </Slider>
  );
}
export default Crousal
