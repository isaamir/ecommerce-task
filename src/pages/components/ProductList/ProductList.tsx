import React, { useState } from "react";
import Card from "@/components/Card";
import { produtList } from "@/utils/helpers/productListDummyData";
import Tabs from "@/components/Tabs";
import { TabValues } from "@/utils/enums";

const ProductList: React.FC = () => {
  const [selectedTabValue, setSelectedTabValue] = useState("0");

  return (
    <div className="wrapper">
      <div className="flex justify-center flex-col mb-20 px-3 my-[80px]">
        <div className="flex justify-center my-4">
          <Tabs
            selectedTabValue={selectedTabValue}
            setSelectedTabValue={setSelectedTabValue}
            defaultTab={TabValues.ZERO}
            variant="secondary"
            tabsData={[
              { tabValue: TabValues.ZERO, tabText: "Furniture" },
              { tabValue: TabValues.ONE, tabText: "Bags" },
              { tabValue: TabValues.TWO, tabText: "Decoration" },
              { tabValue: TabValues.THREE, tabText: "Accessories" },
            ]}
          />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {selectedTabValue === TabValues.ZERO && (
            <>
              {produtList &&
                produtList.map((data, ind) => {
                  return <Card key={ind} data={data} animate />;
                })}
            </>
          )}
          {selectedTabValue === TabValues.ONE && (
            <>
              {produtList &&
                produtList.map((data, ind) => {
                  return <Card key={ind} data={data} animate />;
                })}
            </>
          )}
          {selectedTabValue === TabValues.TWO && (
            <>
              {produtList &&
                produtList.map((data, ind) => {
                  return <Card key={ind} data={data} animate />;
                })}
            </>
          )}
          {selectedTabValue === TabValues.THREE && (
            <>
              {produtList &&
                produtList.map((data, ind) => {
                  return <Card key={ind} data={data} animate />;
                })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
