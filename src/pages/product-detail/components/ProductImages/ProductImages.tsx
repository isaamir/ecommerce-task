import React from "react";
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
import "react-image-gallery/styles/css/image-gallery.css";

const ProductImages: React.FC = () => {
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
  ];
  return (
    <>
      <div className="flex gap-x-[30px] my-[120px]">
        <div
          className="w-[150%] h-full"
        >
          <ImageGallery
            items={images}
            thumbnailPosition="left"
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            slideDuration={0}
            stopPropagation={false}
            onMouseOver={(e) => e.preventDefault()}
          />
        </div>

        <div className="flex flex-col gap-y-[30px]">
          <div className="flex flex-col gap-y-[10px]">
            <Text variant="dark" className="text-[30px] text-[#444]">
              Black Digital Watch
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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </Text>

          <div className="flex flex-col justify-between h-full">
            <div>
              <Text variant="red" className="text-[30px] font-medium">
                $ 7,903.00
              </Text>
            </div>
            <div className="flex items-center gap-[15px]">
              <Text className="text-[18px]">Quantity : </Text>
              <Button variant="icon"> - </Button>
              <Text> 1 </Text>
              <Button variant="icon"> + </Button>
            </div>
            <div className="flex flex-col gap-y-[30px] w-[max-content]">
              <div className="flex gap-x-[20px]">
                <Button size="small">ADD TO CARD</Button>
                <Button size="small" className="px-[9px]">
                  <BsSuitHeart size="15px" />
                </Button>
              </div>
              <div>
                <Button className="bg-[#ff4136] text-[#ffffff] w-full border-[0px]" size="small">
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
    </>
  );
};

export default ProductImages;
