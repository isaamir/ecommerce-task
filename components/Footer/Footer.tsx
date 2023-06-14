import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.bgImage}>
      {/* <div className="bg-auto bg-no-repeat bg-center bg-[url('/assets/images/background.png')]">
        this is footer
      </div> */}
      <div className="wrapper flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={106}
              height={27}
              className="object-contain"
            />
            <p className="text-8xl">
              Get 10% discount with notified about the latest news and updates.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-2xl">Newsletters</p>
            <p className="text-3xl font-bold underline">
              Get 10% discount with notified about the latest news and updates.
            </p>
          </div>

          <div className="flex flex-col">
            <p>Contact Us</p>
            <p className="text-3xl font-bold underline">
              Your address or contact info goes here
            </p>
          </div>

          <div className="flex flex-col">
            <p>Follow Us</p>

            <p className="text-3xl font-bold underline">
              Get 10% discount with notified about the latest news and updates.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
