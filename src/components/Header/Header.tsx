import React, { useState } from "react";
import OffCanvas from "../OffCanvas";
import { Disclosure } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useProductListState } from '@/state/cart/hooks'
import Text from "../Text";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const {productList} = useProductListState()
  const [openOffCanvas, setOpenOffCanvas] = useState(false);
  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-[#17202A] focus:outline-[#17202A] focus:ring-2 focus:ring-inset focus:ring-[#17202A]">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <AiOutlineClose
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <RxHamburgerMenu
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-between sm:items-center sm:justify-between">
                  <Link href={"/"}>
                    <Image
                      src="/assets/images/logo.png"
                      alt="logo"
                      width={105}
                      height={27}
                      className="object-contain"
                    />
                  </Link>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex justify-between gap-[40px] max-lg:gap-[10px]">
                      <Link href="/">
                        <Text variant="contrast">Home</Text>
                      </Link>
                      <Link href="/">
                        <Text variant="contrast">Shop</Text>
                      </Link>
                      <Link href="/">
                        <Text variant="contrast">Collections</Text>
                      </Link>
                      <Link href="/">
                        <Text variant="contrast">Blog</Text>
                      </Link>
                      <Link href="/">
                        <Text variant="contrast">About</Text>
                      </Link>
                      <Link href="/">
                        <Text variant="contrast">Contract</Text>
                      </Link>
                    </div>
                  </div>

                  <div className="flex justify-between gap-[25px] max-sm:mr-[60px]">
                    <div className="max-sm:hidden">
                      <FiSearch color="#666" size="20px" cursor="pointer" />
                    </div>

                    <BsPerson color="#666" size="20px" cursor="pointer" />
                    <div
                      className="relative pointer"
                      onClick={() => setOpenOffCanvas(true)}
                    >
                      <div className="absolute bg-[#ff4136] text-[#ffffff] w-[20px] h-[20px]  rounded-full top-[-12px] right-[-15px] flex justify-center items-center pointer">
                        <Text className="text-[#ffffff] text-[11px]">{productList.length}</Text>
                      </div>
                      <AiOutlineShoppingCart
                        color="#666"
                        size="20px"
                        cursor="pointer"
                      />
                    </div>

                    <div className="max-sm:hidden">
                      <RxHamburgerMenu
                        color="#666"
                        size="20px"
                        cursor="pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* this is for mobile screen */}
            <Disclosure.Panel className="sm:hidden  max-sm:bg-gray-800">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link href="/">
                  <Text variant="underline">Home</Text>
                </Link>
                <Link href="/">
                  <Text variant="underline">Shop</Text>
                </Link>
                <Link href="/">
                  <Text variant="underline">Collections</Text>
                </Link>
                <Link href="/">
                  <Text variant="underline">Blog</Text>
                </Link>
                <Link href="/">
                  <Text variant="underline">About</Text>
                </Link>
                <Link href="/">
                  <Text variant="white" size="lg" className="py-2">
                    Contract
                  </Text>
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <OffCanvas
        openOffCanvas={openOffCanvas}
        setOpenOffCanvas={setOpenOffCanvas}
      />
    </>
  );
};
export default Header;
