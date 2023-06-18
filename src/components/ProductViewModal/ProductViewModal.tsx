import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../Button";
import { AiOutlineClose } from "react-icons/ai";
import Text from "../Text";
import Image from "next/image";
import { useProductListState } from "@/state/cart/hooks";
import { IProductType } from "@/utils/types";

interface IModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: IProductType;
}
const ProductViewModal: React.FC<IModalProps> = ({ open, setOpen, data }) => {
  const { productList, setProductList } = useProductListState();
  const [itemQuantity, setItemQuantity] = useState(1);
  const cancelButtonRef = useRef(null);

  const addToCart = (data: IProductType) => {
    if (productList.length > 0) {
      let existingItem = productList.find((prod) =>  data.id === prod.id)
      if (existingItem) {
        setProductList([...productList, existingItem]);
      } else {
        setProductList([...productList, {
                   id: data.id,
                   image: data.image,
                   name: data.name,
                   price: data.price,
                   quantity: itemQuantity,
               }]);
      }
    } else {
      setProductList([
        ...productList,
        {
          id: data.id,
          image: data.image,
          name: data.name,
          price: data.price,
          quantity: itemQuantity,
        },
      ]);
    }
    setOpen(false)
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[50%] ">
                <div className="flex flex-col justify-between divide-y divide-solid md:divide-solid">
                  <div className="flex justify-end p-[10px]">
                    <Button variant="icon" onClick={() => setOpen(false)}>
                      <AiOutlineClose size="20" />
                    </Button>
                  </div>

                  <div className="flex gap-x-[30px] p-[20px]">
                    <div>
                      <Image
                        src={data.image}
                        width="1500"
                        height="100"
                        alt="img"
                      />
                    </div>

                    <div className="flex flex-col gap-y-[20px]">
                      <Text variant="dark" className="text-[18px]">
                        {data.name}
                      </Text>
                      <Text variant="red" className="text-[20px] font-medium	">
                        $ {data.price}
                      </Text>
                      <Text className="leading-[30px]">{data.desc}</Text>
                      <div className="flex items-center gap-[15px]">
                        <Text className="text-[16px]">Quantity : </Text>
                        <Button
                          variant="icon"
                          onClick={() => {
                            if (itemQuantity === 1) {
                              setItemQuantity(1);
                            } else {
                              setItemQuantity(itemQuantity - 1);
                            }
                          }}
                        >
                          -
                        </Button>
                        <Text> {itemQuantity} </Text>
                        <Button
                          variant="icon"
                          onClick={() => setItemQuantity(itemQuantity + 1)}
                        >
                          +
                        </Button>
                      </div>

                      <Button
                        size="small"
                        className="bg-[#808B96] border-0	text-[#ffffff] text-[22px] w-[60%]"
                        onClick={() => addToCart(data)}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default ProductViewModal;
