import React, { useState } from "react";
import Tabs from "@/components/Tabs";
import { TabValues } from "@/utils/enums";
import Text from "@/components/Text";
const ProductDetailDesc = () => {
  const [selectedTabValue, setSelectedTabValue] = useState("0");

  const sizeCartData = [
    {
      country: "UK",
      size: { s1: 18, s2: 20, s3: 22, s4: 24, s5: 26 },
    },
    {
      country: "European",
      size: { s1: 46, s2: 48, s3: 50, s4: 52, s5: 54 },
    },
    {
      country: "Usa",
      size: { s1: 18, s2: 20, s3: 22, s4: 24, s5: 26 },
    },
    {
      country: "Australia",
      size: { s1: 46, s2: 48, s3: 50, s4: 52, s5: 54 },
    },
    {
      country: "Canada",
      size: { s1: 18, s2: 20, s3: 22, s4: 24, s5: 26 },
    },
  ];
  return (
    <div>
      <div className="flex justify-center flex-col mb-[0px] divide-y divide-dashed md:divide-solid">
        <div className=" flex justify-center my-[-6px]">
          <Tabs
            selectedTabValue={selectedTabValue}
            setSelectedTabValue={setSelectedTabValue}
            defaultTab={TabValues.ZERO}
            variant="primary"
            tabsData={[
              { tabValue: TabValues.ZERO, tabText: "More Info" },
              { tabValue: TabValues.ONE, tabText: "Reviews" },
              { tabValue: TabValues.TWO, tabText: "Comments" },
              { tabValue: TabValues.THREE, tabText: "Size" },
              { tabValue: TabValues.FOUR, tabText: "Shipping Policy" },
            ]}
          />
        </div>
        <div className="flex justify-between flex-wrap py-[40px]">
          {selectedTabValue === TabValues.ZERO && (
            <>
              <div className="flex flex-col  gap-y-[15px]">
                <Text size="xl">Details</Text>
                <div>
                  <Text className="leading-[30px]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </Text>
                  <Text className="leading-[30px]">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </Text>
                </div>
              </div>
            </>
          )}
          {selectedTabValue === TabValues.ONE && (
            <>
              <div className="flex justify-between items-center w-full p-[20px] border border-[#CACFD2]-600">
                <div>
                  <Text size="xl">Customer Reviews</Text>
                  <Text>No reviews yet</Text>
                </div>

                <div>
                  <Text
                    variant="contrast"
                    className="underline hover:no-underline"
                  >
                    Write a review
                  </Text>
                </div>
              </div>
            </>
          )}
          {selectedTabValue === TabValues.TWO && (
            <>
              <div className="flex justify-between items-center w-full p-[20px] border border-[#CACFD2]-600">
                <div>
                  <Text size="xl">No Comments</Text>
                  <Text>No comments yet</Text>
                </div>

                <div>
                  <Text
                    variant="contrast"
                    className="underline hover:no-underline"
                  >
                    Write a comment
                  </Text>
                </div>
              </div>
            </>
          )}
          {selectedTabValue === TabValues.THREE && (
            <>
              <table className="border-collapse border border-slate-400 w-full">
                <tbody>
                  {sizeCartData &&
                    sizeCartData.map((size, index) => (
                      <tr key={index}>
                        <td className="border border-slate-300 text-[14px] p-[10px]">
                          {size.country}
                        </td>
                        <td className="border border-slate-300 text-[14px] p-[10px]">
                          {size.size.s1}
                        </td>
                        <td className="border border-slate-300 text-[14px] p-[10px]">
                          {size.size.s2}
                        </td>
                        <td className="border border-slate-300 text-[14px] p-[10px]">
                          {size.size.s3}
                        </td>
                        <td className="border border-slate-300 text-[14px] p-[10px]">
                          {size.size.s4}
                        </td>
                        <td className="border border-slate-300 text-[14px] p-[10px]">
                          {size.size.s5}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </>
          )}
          {selectedTabValue === TabValues.FOUR && <></>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDesc;