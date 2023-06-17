"use-client";
import React, { useRef } from "react";
import { Inter } from "next/font/google";
import ProductList from "./components/ProductList";
import Crousal from "@/components/Crousal";
import Button from "@/components/Button";
import { CrousalVarients } from "@/utils/enums";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const slider = useRef(null);

  const homeData = [
    {
      image: "/assets/images/crousal-img-one.png",
    },
    {
      image: "/assets/images/crousal-img-two.png",
    },
  ];

  return (
    <>
      <div className="relative">
        <Crousal
          variant={CrousalVarients.SINGLE}
          homeData={homeData}
          slider={slider}
        />

        <div className=" flex justify-between">
          <div className="absolute top-[30%] left-[50px]">
            <Button variant="icon" onClick={() => slider?.current?.slickPrev()}>
              <IoIosArrowBack size="50" color="#797D7F" />
            </Button>
          </div>

          <div className="absolute top-[30%] right-[50px]">
            <Button variant="icon" onClick={() => slider?.current?.slickNext()}>
              <IoIosArrowForward size="50" color="#797D7F" />{" "}
            </Button>
          </div>
        </div>
      </div>

      <ProductList />
      </>
  );
};
export default Home;
