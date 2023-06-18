"use-client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Text from "../Text";
import { BsHeart } from "react-icons/bs";
import { ICardProps } from "./types";
import { IProductType } from "@/utils/types";

import ProductViewModal from "../ProductViewModal";
import clsx from "clsx";
import Button from "../Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useAnimation, motion, useInView } from "framer-motion";
import {
  useProductListState,
  useSelectedProductState,
} from "@/state/cart/hooks";
import OffCanvas from "../OffCanvas";

const Card: React.FC<ICardProps> = ({ data, animate }) => {
  const [openPreview, setOpenPreview] = useState(false);
  const { productList, setProductList } = useProductListState();
  const { selectedProduct, setSelectedProduct } = useSelectedProductState();
  const [openOffCanvas, setOpenOffCanvas] = useState(false);

  const squareVariants = {
    visible: { scale: 1, transition: { ease: "easeOut", duration: 0.8 } },
    hidden: { scale: 0.7 },
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else controls.start("hidden");
  }, [controls, isInView]);

  const addToCart = (data: IProductType) => {
    if (productList.length > 0) {
      const existingItem = productList.find((prod, ind) => data.id === prod.id);
      if (existingItem) {
        setProductList([...productList, existingItem]);
      } else {
        setProductList([
          ...productList,
          {
            id: data.id,
            image: data.image,
            name: data.name,
            price: data.price,
            quantity: 1,
          },
        ]);
      }
    } else {
      setProductList([
        ...productList,
        {
          id: data.id,
          image: data.image,
          name: data.name,
          price: data.price,
          quantity: 1,
        },
      ]);
    }
    setOpenOffCanvas(true);
  };

  const selectedProductHandler = (data: any) => {
    console.log("data os ", data);
    setSelectedProduct({
      id: data.id,
      image: data.image,
      name: data.name,
      desc: data.desc,
      price: data.price,
    });
  };

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={!animate ? null : squareVariants}
      >
        <div
          className="flex flex-col relative group"
          onClick={() => selectedProductHandler(data)}
        >
          <Link href={animate ? "/product-detail" : "#"}>
            <div
              className={clsx(
                "bg-cover bg-center bg-no-repeat min-w-[270px] w-[100%] h-[270px] relative ",
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

            <Button
              variant="icon"
              className="px-[12px]"
              onClick={() => addToCart(data)}
            >
              <AiOutlineShoppingCart size="20" />
            </Button>
          </div>
        </div>
      </motion.div>

      <ProductViewModal
        open={openPreview}
        setOpen={setOpenPreview}
        data={data}
      />
      <OffCanvas
        openOffCanvas={openOffCanvas}
        setOpenOffCanvas={setOpenOffCanvas}
      />
    </>
  );
};

export default Card;
