import React, { useState } from "react";
import Card from "@/components/Card";
import { produtList } from "./dummyData";
import Tabs from "@/components/Tabs";
import { TabValues } from "@/utils/enums";

const ProductList: React.FC = () => {
  const [selectedTabValue, setSelectedTabValue] = useState("0");

  return (
    <div className="wrapper">
      <div className="flex justify-center flex-col my-[80px]">
        <div className=" flex justify-center my-[20px]">
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
        <div className="flex justify-between flex-wrap gap-y-[60px]">
          {selectedTabValue === TabValues.ZERO && (
            <>
              {produtList &&
                produtList.map((data, ind) => {
                  return <Card key={ind} data={data} />;
                })}
            </>
          )}
          {selectedTabValue === TabValues.ONE && (
            <>
              {produtList &&
                produtList.map((data, ind) => {
                  return <Card key={ind} data={data} />;
                })}
            </>
          )}
          {selectedTabValue === TabValues.TWO && (
            <>
              {produtList &&
                produtList.map((data, ind) => {
                  return <Card key={ind} data={data} />;
                })}
            </>
          )}
          {selectedTabValue === TabValues.THREE && (
            <>
              {produtList &&
                produtList.map((data, ind) => {
                  return <Card key={ind} data={data} />;
                })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
