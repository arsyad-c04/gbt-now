import React from "react";
import Header from "../components/Header";
import { FiAlertTriangle } from "react-icons/fi";
import Footer2 from "../components/Footer2";

function NotFound() {
  return (
    <>
      <Header />
      <section id="notfound" class=" min-h-screen flex flex-col ">
        <div class=" flex-grow py-8 px-4 mx-auto max-w-screen-lg  lg:py-16 lg:px-6">
          <div class="bg-white rounded-2xl p-5 mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-green-800">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-green-800 md:text-4xl ">
              Something's missing.
            </p>
            <p class="mb-4 text-lg font-light text-green-800">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <a
              href="#"
              class="inline-flex text-white bg-green-800 hover:shadow-xl font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
