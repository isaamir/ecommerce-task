import React from "react";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";

const Card: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[270px] h-[270px]">
        <Link href="/product-detail">
          <div className="bg-[url('/assets/images/product-one.png')] bg-no-repeat bg-[length:270px_270px] w-[270px] h-[270px] relative">
            <BsHeart className="w-[15px] h-[15px] absolute bottom-5 right-5" />
          </div>
        </Link>
      </div>
      <div className="mt-5">
        <Link href="/product-detail" className="text-[14px] text-[#444] font-medium  hover:text-[#ff4136]">
            Dummy Product Name
        </Link>
        <p className="text-[16px] text-[#ff4136] font-normal">
            $79.00
        </p>
      </div>
    </div>
  );
};

export default Card;
