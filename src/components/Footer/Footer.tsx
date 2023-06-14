import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Input from "../Input";
import Text from "../Text";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-[url('/assets/images/background.png')] bg-no-repeat bg-cover" >
      <div className="wrapper flex flex-col divide-y divide-dashed md:divide-solid md:max-xl:px-[50px]">
        <div className="flex flex-row flex-wrap justify-between  pt-[76px] pb-[65px]">
          <div className="flex flex-col gap-[24px] max-w-[250px]">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={106}
              height={27}
              className="object-contain"
            />
            <Text>
              Get 10% discount with notified about the latest news and updates.
            </Text>
          </div>

          <div className="flex flex-col gap-[24px] max-w-[280px]">
            <Text size="lg">Newsletters</Text>
            <Input placeholder="Email Address"/>
          </div>

          <div className="flex flex-col gap-[24px] max-w-[200px]">
            <Text size="lg">Contact Us</Text>
            <Text>
              Your address or contact info goes here
            </Text>
          </div>

          <div className="flex flex-col gap-[24px]">
            <Text size="lg">Follow Us</Text>

            <div className="flex gap-2">
              <Button size="regular" variant="link">
                <Link href="https://facebook.com">
                  <GrFacebookOption color="#c1c1c1" />
                </Link>
              </Button>
              <Button size="regular" variant="link">
                <Link href="https://google.com">
                  <AiOutlineGooglePlus color="#c1c1c1" />
                </Link>
              </Button>
              <Button size="regular" variant="link">
                <Link  href="https://twitter.com">
                  <RiTwitterFill color="#c1c1c1" />
                </Link>
              </Button>
              <Button size="regular" variant="link">
                <Link  href="https://instagram.com">
                  <TiSocialInstagram color="#c1c1c1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between py-[20px]">
          <div className=" flex flex-row gap-x-[4px]  text-[14px] text-[#666]">
            <p> © 2022</p>
            <Link href="/">Uniqlo </Link>
            <p> All Right Reserved.</p>
          </div>
          <div className="flex flex-row justify-between gap-x-[30px] text-[14px] text-[#666]">
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
