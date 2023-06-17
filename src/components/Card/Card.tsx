"use-client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Text from "../Text";
import { BsHeart } from "react-icons/bs";
import { ICardProps } from "./types";
import clsx from "clsx";

import { useAnimation, motion, useInView } from "framer-motion";

const Card: React.FC<ICardProps> = ({ data, animate }) => {
  const squareVariants = {
    visible: { scale: 1, transition: { scale: 1, duration: 1 }},
    hidden: { scale: 0  },
  };

  const controls = useAnimation();
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else controls.start("hidden");
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animate ? squareVariants : null}
    >
      <div className="flex flex-col">
        <div>
          <Link href={animate ? "/product-detail" : "#"}>
            <div
              className={clsx( "bg-no-repeat bg-contain min-w-[270px] w-[100%] h-[270px] ", !animate && "h-[370px]"  )}
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <BsHeart className="w-[15px] h-[15px] absolute bottom-5 right-5" />

            </div>
          </Link>
        </div>
        <div className="mt-5">
          <Link
            href={animate ? "/product-detail" : "#"}
            className="text-[14px] text-[#444] font-medium  hover:text-[#ff4136]"
          >
            {data.name}
          </Link>
          <Text size="lg" variant="red">
            {data.price}
          </Text>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
