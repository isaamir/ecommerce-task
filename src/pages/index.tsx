import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ProductList from "./components/ProductList";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  
  return (
    <div>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};
export default Home;
