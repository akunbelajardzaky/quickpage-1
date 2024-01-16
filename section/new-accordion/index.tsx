"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const TabsDemo = () => (
  <Tabs.Root
    className="flex mt-48  max-w-[1200px] justify-start gap-x-24 mx-auto justify-center justify-between p-10" // Align tabs to the start
    defaultValue="tab1"
  >
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
    <div>
      <Tabs.Content value="tab1">
        <Accordion.Root
          className="w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <div className="flex flex-col gap-y-5">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is it unstyled?</AccordionTrigger>
              <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look
                and feel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can it be animated?</AccordionTrigger>
              <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion.Root>
      </Tabs.Content>
      <Tabs.Content value="tab2">Lorem, ipsum dolor.</Tabs.Content>
      <Tabs.Content value="tab3">Lorem ipsum dolor sit.</Tabs.Content>
      <Tabs.Content value="tab4">Lorem ipsum dolor sit amet.</Tabs.Content>
    </div>
  </Tabs.Root>
);

export default TabsDemo;

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        " mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10  outline-none border-none focus:outline-none focus:border-none active:outline-none active:border-none ",
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
          "text-black max-w-[900px] maxmd hover:bg-mauve2 group flex h-[120px] flex-1 cursor-default items-center justify-between  px-5 text-[15px] leading-none  outline-none data-[state=closed]:bg-[#F3F3F3] data-[state=closed]:rounded-b-[40px]  rounded-t-[40px] ",
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
        "text-mauve11 max-w-[900px] maxmd data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp  overflow-hidden text-[15px]    rounded-b-[40px] ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className={`py-[15px] mb-10 px-5`}>{children}</div>
    </Accordion.Content>
  )
);
