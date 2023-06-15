
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { ITabsProps } from "./types"
import clsx from "clsx"

const TabsCustom:React.FC<ITabsProps> = ({ defaultTab, selectedTabValue, setSelectedTabValue, tabsData, variant="primary" })  => (
  <Tabs.Root
    className="flex flex-col"
    defaultValue={defaultTab}
    onValueChange={setSelectedTabValue}
    value={selectedTabValue}
  >
    <Tabs.List 
    className="flex justify-start height-[50px] p-[6px] w-[fit-content] shrink-0 focus:outline:'red' focus:ring-violet-300 "
    >

    {tabsData && tabsData.map((tab, index) => (
          <Tabs.Trigger
            key={index}
            value={tab.tabValue}
            className={clsx(
              'px-8 pb-[17px] bg-transparent text-[20px] text-[#505050] ',
              variant === 'primary' && 'focus:border-b-2 focus:border-[#ff4136]',
              variant === 'secondary' && 'focus:text-blue-500  bg-gray-200 text-gray-800',
              variant === 'success' && 'bg-green-500 text-white',
              variant === 'warning' && 'bg-yellow-500 text-white',
              variant === 'danger' && 'bg-red-500 text-white',
            )}
          >
            {tab.tabText}
          </Tabs.Trigger>
        ))}

    </Tabs.List>

    {/* <div className="mt-4"> */}
       {/* {tabsContent.map((data:any, index:string) => (
          <Tabs.Content key={index} value={index} className="w-[120] h-[120]">
            <p>{data}</p>
          </Tabs.Content>
        ))} */}
      {/* </div> */}
  </Tabs.Root>
);

export default TabsCustom;