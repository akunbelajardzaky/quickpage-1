import React from "react";
import AccordionDesktop from "@/section/new-accordion";

function index() {
  return (
    <div>
      <>
        <div className="lg:hidden">mobike</div>
        <div className="hidden flex-col lg:flex">
          <AccordionDesktop />
        </div>
      </>
    </div>
  );
}

export default index;
