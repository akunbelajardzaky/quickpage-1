"use client";

import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "@radix-ui/react-icons";
import { Icons } from "../../../components/icon";
import localFont from "next/font/local";
import { Typography } from "@/components/typograpy";
import "./accordion.css";
import { accordion } from "@/lib/info";
const FBlack = localFont({
  src: "../../../public/fonts/Friends-BlackItalic.otf",
});
const FNormal = localFont({ src: "../../../public/fonts/Friends-Normal.otf" });
const FsemiBold = localFont({
  src: "../../../public/fonts/Friends-SemiBoldItalic.otf",
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
        <div className="space-y-5">
          <div>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography className={``} variant="h3">
                      Bagaimana cara startup pendidikan Anda melindungi privasi
                      pengguna?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Startup pendidikan kami berkomitmen untuk melindungi privasi
                  pengguna. Kami menggunakan teknologi keamanan terbaik untuk
                  melindungi data pengguna, termasuk enkripsi, otentikasi
                  multifaktor, dan kontrol akses. Kami juga memiliki kebijakan
                  privasi yang jelas yang menjelaskan bagaimana kami
                  mengumpulkan, menggunakan, dan membagikan data pengguna.
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
          <div>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography className={``} variant="h3">
                      Apa data pribadi yang dikumpulkan oleh startup pendidikan
                      Anda?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Startup pendidikan kami mengumpulkan data pribadi pengguna
                  yang diperlukan untuk menyediakan layanan kami. Data ini dapat
                  mencakup nama, alamat email, nomor telepon, tanggal lahir, dan
                  informasi pendidikan. Kami juga dapat mengumpulkan data
                  penggunaan, seperti data tentang situs web atau aplikasi yang
                  dikunjungi pengguna dan konten yang mereka akses.
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
          <div>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography className={``} variant="h3">
                      Bagaimana cara pengguna dapat mengakses dan mengontrol
                      data pribadi mereka?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Pengguna dapat mengakses dan mengontrol data pribadi mereka
                  melalui akun mereka. Mereka dapat melihat data yang
                  dikumpulkan oleh startup pendidikan, memperbarui data
                  tersebut, atau menghapus data tersebut. Pengguna juga dapat
                  memilih untuk menerima atau menolak komunikasi pemasaran dari
                  startup pendidikan.
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
          <div>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography className={``} variant="h3">
                      Bagaimana cara pengguna dapat mengajukan keluhan tentang
                      privasi?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Pengguna dapat mengajukan keluhan tentang privasi dengan
                  menghubungi tim privasi startup pendidikan. Tim privasi akan
                  menyelidiki keluhan tersebut dan mengambil tindakan yang
                  sesuai.
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
          <div>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography className={``} variant="h3">
                      Bagaimana cara pengguna dapat mengetahui perubahan
                      kebijakan privasi?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Startup pendidikan kami akan menginformasikan pengguna tentang
                  perubahan kebijakan privasi melalui email atau melalui situs
                  web kami.
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
      className={classNames(
        "justify-start min-w-[900px] max-w-[900px]",
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
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="">
      <Accordion.Trigger
        className={classNames(
          "flex justify-center items-center gap-x-2",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <Icons.Plus aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-mauve11  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
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
