import React from "react";

function Program() {
  return (
    <>
      <section id="program" className="bg-gray-200 pt-1 pb-10">
        <div className="container mt-10 bg-white py-5 w-5/6 rounded-xl mx-auto ">
          <div>
            <h3 className="mb-5 text-3xl text-green-800 font-bold mx-auto text-center items-center">
              Program Unggulan
            </h3>
            <div className="md:flex px-7">
              <img
                className="size-48 mx-auto"
                src="https://pbs.twimg.com/media/EW--ao7UYAAoheu.jpg"
                alt=""
              />
              <div className="p-7">
                <h4 className="text-2xl md:text-left font-bold text-green-900 text-center">
                  Qira'at Sab'ah
                </h4>
                <p className="text-justify">
                  Qirâ'ât al-Sab'ah adalah tujuh macam cara atau mazhab dalam
                  mengucapkan kalimat-kalimat yang ada dalam al-Qur'ân, yang
                  telah ditetapkan oleh para imam ahli qurrâ' dengan sanad yang
                  kokoh kepada Rasulullah saw. dan berbeda dengan mazhab yang
                  lain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Program;
