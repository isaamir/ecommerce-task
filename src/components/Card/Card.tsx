"use-client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Text from "../Text";
import { BsHeart } from "react-icons/bs";
import { ICardProps } from "./types";
import ProductViewModal from "../ProductViewModal";
import clsx from "clsx";
import Button from "../Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useAnimation, motion, useInView } from "framer-motion";

const Card: React.FC<ICardProps> = ({ data, animate }) => {
  const [openPreview, setOpenPreview] = useState(false);

  const squareVariants = {
    visible: { scale: 1, transition: { scale: 1, duration: 1 } },
    hidden: { scale: 0 },
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else controls.start("hidden");
  }, [controls, isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      >
        <div className="flex flex-col relative group">
          <Link href={animate ? "/product-detail" : "#"}>
            <div
              className={clsx(
                "bg-no-repeat bg-contain min-w-[270px] w-[100%] h-[270px] relative ",
                !animate && "h-[370px]"
              )}
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <BsHeart className="w-[15px] h-[15px] absolute bottom-5 right-5" />
            </div>
          </Link>

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

          <div className="flex bg-[#D0D3D4] z-100 opacity-70 w-[max-content] hidden group-hover:block absolute top-[30%] right-[35%]">
                <Button
                  variant="icon"
                  className="px-[12px] border-r-2 border-gray-500"
                  onClick={() => setOpenPreview(true)}
                >
                  <AiOutlinePlus size="20" />
                </Button>

                <Button variant="icon" className="px-[12px]">
                  <AiOutlineShoppingCart size="20" />
                </Button>
              </div>
        </div>
      </motion.div>

      <ProductViewModal open={openPreview} setOpen={setOpenPreview} />
    </>
  );
};

export default Card;
