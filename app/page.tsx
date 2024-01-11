"use client";
import React from "react";
import Navbar from "@/section/navbar";
import Hero from "@/section/hero";
import Card from "@/section/card";
import Feature from "@/section/feature";
import Accordion from "@/section/accordion";
import Footer from "@/section/footer";
import PricingTables from "@/section/price";
import Stats from "@/section/stats";
import Docs from "./docs";
import Company from "../section/company/test";
import CardContent from "@/section/card-content";
import Comment from "../section/pepole-say";
import CardContentA from "../section/card-bulr/index";
import SeCC from "../section/second-header/page";
import Cookie from "@/components/cookie";
import { isProduction } from "@/lib/info";
import Cruve from "./cruve";
import Anm from "./anm";

// gradient color

import GradientHero from "../section/with-gradient/hero";
import GradientCompany from "../section/with-gradient/company";
import GradientFeature from "../section/with-gradient/feature";
import GradientFooter from "../section/with-gradient/footer";

export default function App() {
  if (isProduction) {
    return (
      <>
        <div className="flex flex-col h-screen">
          <header className="p-4">
            <Navbar />
          </header>
          <main className="p-4 flex-grow ">
            <Anm />
            <GradientHero />
            <GradientCompany />
            <Card />
            {/* <PricingTables /> */}
            {/* <CardContent /> */}
            <GradientFeature />
            {/* <Comment /> */}
            {/* <Accordion /> */}
            <SeCC />
            {/* <CardContentA /> */}
            {/* <Stats /> */}
            {/* <Cookie /> */}
          </main>
          <footer className="p-4">
            <Footer />
          </footer>
        </div>
        <></>
      </>
    );
  } else {
    return <Docs />;
  }
}
