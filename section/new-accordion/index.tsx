"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Akordion from "@/section/accordion";

const TabsDemo = () => (
  <Tabs.Root
    className="flex mt-48  max-w-[1200px]  gap-x-24 mx-auto  justify-between p-10" // Align tabs to the start
    defaultValue="tab1"
  >
    <div>
      <Tabs.List
        className="border-mauve6 flex flex-col gap-y-9"
        aria-label="Manage your account"
      >
        {/* Align triggers to the start using text-start */}
        <Tabs.Trigger
          className="text-start data-[state=active]:bg-red-500 px-3 py-2 rounded-xl "
          value="tab1"
        >
          General
        </Tabs.Trigger>
        <Tabs.Trigger
          className="text-start data-[state=active]:bg-red-500 px-3 py-2 rounded-xl"
          value="tab2"
        >
          Privacy
        </Tabs.Trigger>
        <Tabs.Trigger
          className="text-start data-[state=active]:bg-red-500 px-3 py-2 rounded-xl "
          value="tab3"
        >
          Responsible AI
        </Tabs.Trigger>
        <Tabs.Trigger
          className="text-start data-[state=active]:bg-red-500 px-3 py-2 rounded-xl "
          value="tab4"
        >
          Upcoming features and offerings
        </Tabs.Trigger>
      </Tabs.List>
    </div>
    <div className="mb-10">
      <Tabs.Content value="tab1">
        <Akordion />
      </Tabs.Content>
      <Tabs.Content value="tab2">ddwdwdwd </Tabs.Content>
      <Tabs.Content value="tab3"></Tabs.Content>
      <Tabs.Content value="tab4">swswsw </Tabs.Content>
    </div>
  </Tabs.Root>
);

export default TabsDemo;

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        " mt-px min-w-[5000px] overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10  outline-none border-none focus:outline-none focus:border-none active:outline-none active:border-none ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-black min-w-[5000px]    group flex h-[120px] flex-1 cursor-default items-center justify-between  px-5 text-[15px] leading-none  outline-none  data-[state=closed]:rounded-b-[40px]  rounded-t-[40px] ",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <div className=" rounded-full px-3 py-3 panahX hidden md:block border-gray-400 border">
          {/* <Icons.Plus
            className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 text-5xl"
            aria-hidden
          /> */}
          icon
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-mauve11 min-w-[5000px]   data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp  overflow-hidden text-[15px]    rounded-b-[40px] ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className={`py-[15px] mb-10 px-5`}>{children}</div>
    </Accordion.Content>
  )
);
