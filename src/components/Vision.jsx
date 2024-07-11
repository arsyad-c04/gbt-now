import React from "react";
import { FaBook, FaBookOpen } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { dataVisi } from "../data/DataVisi";

function Vision() {
  return (
    <section id="vision" className="bg-gray-200">
      <div className="w-5/6 mx-auto pt-5 items-center container my-auto">
        <div className="bg-white rounded-xl pb-5 ">
          <h3 className="mb-5 text-3xl text-green-800 pt-5 text-center font-bold ">
            Visi & Misi
          </h3>
          <div className="container mx-auto px-10">
            <ol className="items-center sm:flex">
              {dataVisi.map((item, id) => {
                return (
                  <li className=" mb-6 sm:mb-0" key={id}>
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center h-3 w-3 md:w-6 md:h-6 rounded-full ring-4  bg-gray-200 sm:ring-8 ring-green-800 shrink-0"></div>
                      <div className="hidden sm:flex w-full  h-0.5 bg-green-800"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                      <h3 className="text-2xl font-bold text-green-900 ">
                        {item.title}
                      </h3>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        {item.content}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
