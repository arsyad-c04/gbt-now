import React from "react";

function Jumbotron() {
  return (
    <>
      <section
        id="home"
        className="bg-green-800 bg-blend-overlay bg-cover bg-no-repeat bg-[url('https://www.laduni.id/panel/themes/default/uploads/post/1PPTQ-Al_Hasan_Ponorogo.jpg')]"
      >
        <div className="py-5 px-3 mx-auto md:container h-screen flex items-center ">
          <div className="bg-white py-5 px-5 rounded-xl mx-auto w-5/6">
            <h3 className=" text-green-800 text-3xl md:text-5xl font-bold mx-auto text-center mb-2 md:mb-5">
              Pondok Pesantren Tahfidzul Qur'an Al-Hasan
            </h3>
            <p className="text-center text-black md-5">
              Mari bergabung bersama kami
            </p>
            <p className="px-5 md-5 text-center text-black">
              Lembaga Pendidikan Pondok Pesantren berbasis Tahfidzul Qur'an dan
              juga mendalami kitab kuning yang merujuk pada Madzhab Syafi'i
            </p>
            <p className="text-center mt-5">
              <a
                href=""
                className="font-bold mx-auto rounded-xl mt-5 text-white bg-green-800 text-center p-2 hover:bg-white hover:text-green-800 hover:shadow-xl hover:border-2 hover:border-green-800"
              >
                Daftar Sekarang
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jumbotron;
