import React, { useState } from "react";
import { dataKegiatan } from "../data/DataKegiatan";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Kegiatan() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="news" className="bg-gray-200">
        <div className=" w-full mx-auto  md:flex container">
          <div className="items-center mx-auto mt-5 ">
            <h3 className="bg-white rounded-xl text-3xl font-bold pb-2 text-center border-b-2 border-green-800">
              Kegiatan
            </h3>
            <div className="relative z-0 container w-5/6 my-auto mx-auto items-center">
              <Slider className="" {...settings}>
                {dataKegiatan.map((item, id) => {
                  return (
                    <div
                      key={id}
                      className="flex w-full justify-center items-center z-0 relative p-2 bg-white container rounded-xl mt-5 mb-5 "
                    >
                      <Link to={`/kegiatan/${item.id}`}>
                        <img
                          src={item.image}
                          alt=""
                          className="aspect-square size-64 mx-auto"
                        />
                        <h3 className="font-bold text-2xl mx-auto text-center">
                          {item.desc}
                        </h3>
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="grid-rows-4 md:grid-cols-4 space-x-3 items-center md:flex"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Kegiatan;
