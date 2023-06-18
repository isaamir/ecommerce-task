import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";
import Text from "../Text";
import { useProductListState } from "@/state/cart/hooks";
import Image from "next/image";

interface IOffCanvasProps {
  openOffCanvas: boolean;
  setOpenOffCanvas: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const OffCanvas: React.FC<IOffCanvasProps> = ({
  openOffCanvas,
  setOpenOffCanvas,
  children,
}) => {
  const { productList, setProductList } = useProductListState();
  const [ totalPrice, setTotalPrice] = useState(0)

  const removeFromCart = (prodId:number) => {
    const updatedProducts = productList.filter(prod => prod.id !== prodId);
    setProductList(updatedProducts);
  }

  useEffect(() => {
    let total = 0
    productList.map((prod:any) => {
      total += (prod.price * prod.quantity)
    })
    setTotalPrice(total)
  }, [totalPrice, productList])

  


  return (
    <Transition.Root show={openOffCanvas} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenOffCanvas}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-[full] pl-10 ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="flex justify-end mr-[20px]">
                      <Button
                        variant="icon"
                        onClick={() => setOpenOffCanvas(false)}
                      >
                        <AiOutlineClose size="30" color="#34495E" />
                      </Button>
                    </div>

                    <div className="flex flex-col align-center justify-center px-[30px]">
                      {productList &&
                        productList.map((prod, ind) => (
                          <div
                            key={ind}
                            className="flex justify-between items-start gap-[100px] py-[10px]  border-b-[1px]"
                          >
                            <div className="flex justify-between gap-[20px]">
                              <Image
                                src={prod.image}
                                width="60"
                                height="60"
                                alt="iaamg"
                              />

                              <div className="flex flex-col gap-[0px]">
                                <Text size="sm">{prod.name}</Text>
                                <Text size="sm" variant="red">
                                  {prod.quantity} x {prod.price}
                                </Text>
                              </div>
                            </div>

                            <Button variant="icon" onClick={() => removeFromCart(prod.id)}>
                              <AiOutlineClose size="15" color="gray" />
                            </Button>
                          </div>
                        ))}

                        {
                          productList  && productList.length > 0 && (
                            <div className="flex flex-col gap-[15px] my-[10px]">
                                <div className="flex justify-between items-center">
                                  <Text variant="dark" className="text-[20px]" >Total: </Text>
                                  <Text variant="red" className="text-[16px]"> { totalPrice } </Text>
                                </div>
                                <Button className="normal-case">
                                  View Cart
                                </Button>
                                <Button className="normal-case bg-[#424949] text-[#ffffff]">
                                  Checkout
                                </Button>

                            </div>
                          )
                        }

                        {
                           productList.length === 0 && (
                              <div className="mt-[30px]">
                                 <Text className="text-[20px]" variant="dark">Your cart is empty!</Text>
                              </div>
                           )
                        }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default OffCanvas;
