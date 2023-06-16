"use-client";
import React, { useRef } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ProductList from "./components/ProductList";
import Header from "@/components/Header";
import Crousal from "@/components/Crousal";
import Button from "@/components/Button";
import { CrousalVarients } from "@/utils/enums";
import { produtList } from "./components/ProductList/dummyData";

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
    <div>
      <Header />
      {/* <div className="wrapper">
        <button onClick={() => slider?.current?.slickPrev()}>prev</button>
          <Crousal variant={CrousalVarients.MULTIPLE} productData={produtList} slider={slider} />
        <button onClick={() => slider?.current?.slickNext()} className="mt-[50px]">next</button>
      </div> */}

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
      <Footer />
    </div>
  );
};
export default Home;
