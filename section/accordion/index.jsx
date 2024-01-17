"use client";

import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "@radix-ui/react-icons";
import { Icons } from "../../components/icon";
import localFont from "next/font/local";
import { Typography } from "@/components/typograpy";
import "./accordion.css";
import { accordion } from "@/lib/info";
const FBlack = localFont({ src: "../../public/fonts/Friends-BlackItalic.otf" });
const FNormal = localFont({ src: "../../public/fonts/Friends-Normal.otf" });
const FsemiBold = localFont({
  src: "../../public/fonts/Friends-SemiBoldItalic.otf",
});

function AccordionDemo() {
  const menu = accordion();

  return (
    <div className=" ">
      <Accordion.Root
        className=""
        type="single"
        // defaultValue="item-1"
        collapsible
      >
        <div className="">
          <div>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="">
                    <Typography className={``} variant="h1">
                      {menu[0].id}
                    </Typography>
                    <Typography className={``} variant="h3">
                      {menu[0].label}
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography className={``} variant="body">
                  {menu[0].content}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
        </div>
      </Accordion.Root>
    </div>
  );
}

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(" ", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <div>
          <Icons.Plus aria-hidden />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        " data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp  overflow-hidden ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div>{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;
