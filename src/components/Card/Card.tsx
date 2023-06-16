"use-client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Text from "../Text";
import { BsHeart } from "react-icons/bs";
import { ICardProps } from "./types";

import { useAnimation, motion, useInView } from "framer-motion";

const Card: React.FC<ICardProps> = ({ data }) => {
  const squareVariants = {
    visible: { scale: 1, transition: { scale: 1, duration: 1 } },
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
      variants={squareVariants}
    >
      <div className="flex flex-col">
        <div className="w-[270px] h-[270px]">
          <Link href="/">
            <div
              className="bg-no-repeat bg-[length:270px_270px] w-[270px] h-[270px] relative"
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <BsHeart className="w-[15px] h-[15px] absolute bottom-5 right-5" />
            </div>
          </Link>
        </div>
        <div className="mt-5">
          <Link
            href="/product-detail"
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
