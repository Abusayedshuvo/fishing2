import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import "./style.css";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import RangeSlide from "./RangeSlide";

const Filters = () => {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <p className="text-sm font-bold uppercase">Refine By</p>
        <button className="text-xs">Clear All</button>
      </div>
      <div className="flex flex-wrap gap-2 mb-5">
        <button className="text-xs border border-black p-2 flex items-center gap-4 font-medium">
          7 Weight <RxCross2 />
        </button>
        <button className="text-xs border border-black p-2 flex items-center gap-4 font-medium">
          Saltwater Rods <RxCross2 />
        </button>
        <button className="text-xs border border-black p-2 flex items-center gap-4 font-medium">
          9' <RxCross2 />
        </button>
      </div>

      <Accordion
        type="multiple"
        defaultValue={[
          "item-1",
          "item-2",
          "item-3",
          "item-4",
          "item-5",
          "item-6",
        ]}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="AccordionTrigger">
            <div className="flex items-center gap-1">
              <FaCaretUp className="AccordionChevron" aria-hidden />
              <p className="text-sm font-bold uppercase">Price</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-8 justify-between mt-4">
              <div className="bg-white text-sm p-2 flex justify-between w-full">
                <span>$</span>
                <input
                  className="w-10 text-right"
                  type="text"
                  defaultValue={50}
                />
              </div>
              <div className="bg-white text-sm p-2 flex justify-between w-full">
                <span>$</span>
                <input
                  className="w-10 text-right"
                  type="text"
                  defaultValue={50}
                />
              </div>
            </div>
            <RangeSlide></RangeSlide>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="mt-10" value="item-2">
          <AccordionTrigger className="AccordionTrigger">
            <div className="flex items-center gap-1">
              <FaCaretUp className="AccordionChevron" aria-hidden />
              <p className="text-sm font-bold uppercase">Water Type</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-4">
              <button className="w-full border border-[#ccc] p-2 text-sm font-medium hover:bg-black hover:text-white duration-200 transition-all">
                Saltwater Rods
              </button>
              <button className="w-full border border-[#ccc] p-2 mt-3 text-sm font-medium hover:bg-black hover:text-white duration-200 transition-all">
                Freshwater Rods
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="mt-10" value="item-3">
          <AccordionTrigger className="AccordionTrigger">
            <div className="flex items-center gap-1">
              <FaCaretUp className="AccordionChevron" aria-hidden />
              <p className="text-sm font-bold uppercase"> Fly Rod Model </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-4 text-sm font-medium">
              <ul className="max-h-[200px] overflow-y-auto overflow-x-hidden scrollbar-thin pr-3">
                <li>
                  <button className="w-full flex justify-between">
                    <span>Lift</span> <span>(3)</span>
                  </button>
                </li>
                <li className="mt-3">
                  <button className="w-full flex justify-between">
                    <span>Micro Practice Rod</span> <span>(1)</span>
                  </button>
                </li>
                <li className="mt-3">
                  <button className="w-full flex justify-between">
                    <span>Boost Blue</span> <span>(6)</span>
                  </button>
                </li>
                <li className="mt-3">
                  <button className="w-full flex justify-between">
                    <span>Carbon XL EN</span> <span>(1)</span>
                  </button>
                </li>
                <li className="mt-3">
                  <button className="w-full flex justify-between">
                    <span>Trout Spey</span> <span>(2)</span>
                  </button>
                </li>
                <li className="mt-3">
                  <button className="w-full flex justify-between">
                    <span>Trout X</span> <span>(3)</span>
                  </button>
                </li>
                <li className="mt-3">
                  <button className="w-full flex justify-between">
                    <span>Streamer X</span> <span>(2)</span>
                  </button>
                </li>
                <li className="mt-3">
                  <button className="w-full flex justify-between">
                    <span>Micro Practice Rod</span> <span>(1)</span>
                  </button>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="mt-10" value="item-4">
          <AccordionTrigger className="AccordionTrigger">
            <div className="flex items-center gap-1">
              <FaCaretUp className="AccordionChevron" aria-hidden />
              <p className="text-sm font-bold uppercase"> Fly Rod Weight </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-4 text-sm font-medium">
              <ul className="max-h-[200px] overflow-y-auto overflow-x-hidden scrollbar-thin pr-3">
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>2 Weight</span> <span>(3)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>3 Weight</span> <span>(1)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>4 Weight</span> <span>(6)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>5 Weight</span> <span>(2)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>6 Weight</span> <span>(5)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>7 Weight</span> <span>(3)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>8 Weight</span> <span>(7)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>9 Weight</span> <span>(4)</span>
                  </button>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="mt-10" value="item-5">
          <AccordionTrigger className="AccordionTrigger">
            <div className="flex items-center gap-1">
              <FaCaretUp className="AccordionChevron" aria-hidden />
              <p className="text-sm font-bold uppercase">Fly Rod Length </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-4 text-sm font-medium">
              <ul className="max-h-[200px] overflow-y-auto overflow-x-hidden scrollbar-thin pr-3">
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>8"</span> <span>(3)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>8.4"</span> <span>(1)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>9"</span> <span>(6)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>10"</span> <span>(2)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>10.6"</span> <span>(5)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>11"</span> <span>(3)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>11.3"</span> <span>(7)</span>
                  </button>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="mt-10" value="item-6">
          <AccordionTrigger className="AccordionTrigger">
            <div className="flex items-center gap-1">
              <FaCaretUp className="AccordionChevron" aria-hidden />
              <p className="text-sm font-bold uppercase">Fly Rod Action </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-4 text-sm font-medium">
              <ul className="max-h-[200px] overflow-y-auto overflow-x-hidden scrollbar-thin pr-3">
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span>Medium Fast</span> <span>(16)</span>
                  </button>
                </li>
                <li className="mb-3">
                  <button className="w-full flex justify-between">
                    <span> Fast Action</span> <span>(10)</span>
                  </button>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filters;
