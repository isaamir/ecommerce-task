import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ProductList from "./components/ProductList";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  
  return (
    <div>
      <ProductList />
      <Footer />
    </div>
  );
};
export default Home;
