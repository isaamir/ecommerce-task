import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.bgImage}>
      <div className="wrapper flex flex-col divide-y divide-dashed md:divide-solid">
        <div className="flex flex-row justify-between pt-[76px] pb-[65px]">
          <div className="flex flex-col gap-[24px] max-w-[250px]">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={106}
              height={27}
              className="object-contain"
            />
            <p className="text-[14px] text-[#666]">
              Get 10% discount with notified about the latest news and updates.
            </p>
          </div>

          <div className="flex flex-col gap-[24px]">
            <p className="text-[18px] text-[#444] font-medium">Newsletters</p>
            <button>dd</button>
          </div>

          <div className="flex flex-col gap-[24px]">
            <p className="text-[18px] text-[#444] font-medium">Contact Us</p>
            <p className="text-[14px] text-[#666]">
              Your address or contact info goes here
            </p>
          </div>

          <div className="flex flex-col gap-[24px]">
            <p className="text-[18px] text-[#444] font-medium">Follow Us</p>

            <p className="">
              Get 10% discount with notified about the latest news and updates.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between py-[20px]">
          <div className=" flex flex-row gap-x-[4px]  text-[14px] text-[#666]">
            <p> © 2022</p>
            <Link href="/">Uniqlo </Link>
            <p> All Right Reserved.</p>
          </div>
          <div className="flex flex-row justify-between gap-x-[30px] text-[14px] text-[#666]" >
          <Link href="/">My Account </Link>
          <Link href="/">Search </Link>
          <Link href="/">WishList </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
