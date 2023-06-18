import React, { useState } from "react";
import Text from "@/components/Text";
import { BsStar } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import Button from "@/components/Button";
import Link from "next/link";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { TiSocialInstagram } from "react-icons/ti";
import ImageGallery from "react-image-gallery";
import OffCanvas from "@/components/OffCanvas";
import "react-image-gallery/styles/css/image-gallery.css";
import { useProductListState, useSelectedProductState } from "@/state/cart/hooks";

const ProductImages: React.FC = () => {
  // right now the selected product is coming from redux, but in real scenario, we fetch the data from api
  // from routeurl, we fetch id of product, and make an api call with that id.
  const { selectedProduct, setSelectedProduct } = useSelectedProductState()
  const { productList, setProductList } = useProductListState();
  const [ itemQuantity, setItemQuantity ]  = useState(1)
  const [openOffCanvas, setOpenOffCanvas ] = useState(false)


  console.log('selected prod are', selectedProduct)

  const images = [
    {
      original: "/assets/images/product-one.png",
      thumbnail: "/assets/images/product-one.png",
    },
    {
      original: "/assets/images/product-two.png",
      thumbnail: "/assets/images/product-two.png",
    },
    {
      original: "/assets/images/product-three.png",
      thumbnail: "/assets/images/product-three.png",
    },
    {
        original: "/assets/images/product-four.png",
        thumbnail: "/assets/images/product-four.png",
    },
    {
      original: "/assets/images/product-five.png",
      thumbnail: "/assets/images/product-five.png",
    },
  ];


  const addToCart = (data:any) => {
    if (productList.length > 0) {
      const existingItem = productList.find((prod) =>  data.id === prod.id)
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
    setOpenOffCanvas(true)
  };

  return (
    <>
      <div className="flex max-md:flex-col gap-x-[30px] md:my-[120px] px-5">
        <div className="flex-1">
          <ImageGallery
            items={images}
            thumbnailPosition="bottom"
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            slideDuration={0}
            stopPropagation={false}
            onMouseOver={(e) => e.preventDefault()}
          />
        </div>

        <div className="flex flex-col flex-1 gap-y-[30px] max-md:mt-10">
          <div className="flex flex-col gap-y-[10px]">
            <Text variant="dark" className="text-[30px] text-[#444]">
              {selectedProduct.name}
            </Text>
            <div className="flex items-center gap-[10px]">
              <div className="flex gap-[10px] items-center">
                <BsStar color="#f3c258" />
                <BsStar color="#f3c258" />
                <BsStar color="#f3c258" />
                <BsStar color="#f3c258" />
                <BsStar color="#f3c258" />
              </div>
              <Text className="text-[#444]">No Reviews</Text>
            </div>
          </div>

          <Text className="leading-[30px]">
           {selectedProduct.desc}
          </Text>

          <div className="flex flex-col justify-between h-full">
            <div>
              <Text variant="red" className="text-[30px] font-medium">
                $ {selectedProduct.price}
              </Text>
            </div>
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
            <div className="flex flex-col gap-y-[30px] w-[max-content]">
              <div className="flex gap-x-[20px]">
                <Button size="small" onClick={() => addToCart(selectedProduct)} >ADD TO CARD</Button>
                <Button size="small" className="px-[9px]">
                  <BsSuitHeart size="15px" />
                </Button>
              </div>
              <div>
                <Button className="bg-[#ff4136] text-[#ffffff] w-full border-hidden" size="small">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="flex gap-x-[20px] items-center">
              <Text className="text-[18px]">Share : </Text>

              <div className="flex gap-x-[20px]">
                <Link href="https://facebook.com">
                  <GrFacebookOption
                    color="#c1c1c1"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#ff4136")
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = "#c1c1c1")
                    }
                  />
                </Link>

                <Link href="https://google.com">
                  <AiOutlineGooglePlus
                    color="#c1c1c1"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#ff4136")
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = "#c1c1c1")
                    }
                  />
                </Link>

                <Link href="https://twitter.com">
                  <RiTwitterFill
                    color="#c1c1c1"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#ff4136")
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = "#c1c1c1")
                    }
                  />
                </Link>

                <Link href="https://instagram.com">
                  <TiSocialInstagram
                    color="#c1c1c1"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#ff4136")
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = "#c1c1c1")
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OffCanvas
        openOffCanvas={openOffCanvas}
        setOpenOffCanvas={setOpenOffCanvas}
      />
    </>
  );
};

export default ProductImages;
