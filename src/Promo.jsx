import { useState } from "react";

import kopiSusu from "../assets/images/kopi-susu-gula-aren.jpg";
import cappuccino from "../assets/images/cappuccino.jpg";
import croissant from "../assets/images/croissant.jpg";


function Promo() {


  const [showPromo, setShowPromo] = useState(null);



  const promos = [

    {
      id: 1,
      discount: "50%",
      subtitle: "KOPI ANDALAN",
      title: "Buy 1 Get 1 Kopi Susu",
      image: kopiSusu,
      description:
        "Beli 1 gelas Kopi Susu Gula Aren, gratis 1 gelas lagi.",
      terms: [
        "Berlaku untuk Kopi Susu Gula Aren",
        "Tidak dapat digabungkan dengan promo lain",
        "Berlaku setiap hari"
      ]
    },


    {
      id: 2,
      discount: "20%",
      subtitle: "HEMAT MAHASISWA",
      title: "Diskon Pelajar 20%",
      image: cappuccino,
      description:
        "Khusus pelajar dan mahasiswa dengan kartu pelajar aktif.",
      terms: [
        "Tunjukkan kartu pelajar/mahasiswa",
        "Berlaku setiap hari",
        "Maksimal 2 item"
      ]
    },


    {
      id: 3,
      discount: "15%",
      subtitle: "PAKET KOMBO",
      title: "Paket Ngopi + Croissant",
      image: croissant,
      description:
        "Nikmati kopi pilihan dengan Croissant dalam satu paket hemat.",
      terms: [
        "Berlaku untuk menu paket tertentu",
        "Selama persediaan tersedia",
        "Tidak dapat ditukar dengan menu lain"
      ]
    }


  ];




  return (

    <section
      id="promo"
      className="
      bg-[#f8f3ed]
      py-20
      px-8
      "
    >



      <div className="text-center mb-12">


        <h2
          className="
          text-4xl
          font-bold
          text-[#4b2e1f]
          "
        >
          Promo Hari Ini
        </h2>



        <p className="text-gray-600 mt-3">
          Penawaran spesial dari Kopi Ruang Kita
        </p>


      </div>





      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        max-w-6xl
        mx-auto
        "
      >



        {
          promos.map((promo)=>(


            <div
              key={promo.id}

              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-md
              flex
              flex-col
              transition
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              "
            >



              <div
                className="
                relative
                overflow-hidden
                "
              >


                <img

                  src={promo.image}

                  alt={promo.title}

                  className="
                  w-full
                  h-56
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                  "

                />



                <span
                  className="
                  absolute
                  top-4
                  left-4
                  bg-[#d6a85f]
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-bold
                  "
                >

                  Diskon {promo.discount}

                </span>



              </div>






              <div
                className="
                p-6
                flex
                flex-col
                flex-1
                "
              >



                <p
                  className="
                  text-[#b88646]
                  text-sm
                  font-semibold
                  "
                >

                  {promo.subtitle}

                </p>





                <h3
                  className="
                  text-2xl
                  font-bold
                  text-[#4b2e1f]
                  mt-3
                  "
                >

                  {promo.title}

                </h3>





                <p
                  className="
                  text-gray-600
                  mt-3
                  text-sm
                  flex-1
                  "
                >

                  {promo.description}

                </p>





                <button

                  onClick={() => setShowPromo(promo)}

                  className="
                  mt-6
                  bg-[#8b5e3c]
                  text-white
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  cursor-pointer
                  hover:bg-[#6f4e37]
                  transition
                  "

                >

                  Lihat Promo

                </button>



              </div>




            </div>


          ))
        }



      </div>







      {
        showPromo && (


          <div
            className="
            fixed
            inset-0
            bg-black/50
            flex
            items-center
            justify-center
            z-50
            px-5
            "
          >



            <div
              className="
              bg-[#f8f3ed]
              rounded-3xl
              max-w-xl
              w-full
              p-8
              relative
              "
            >




              <button

                onClick={() => setShowPromo(null)}

                className="
                absolute
                right-6
                top-5
                text-3xl
                text-[#6f4e37]
                cursor-pointer
                "
              >

                ×

              </button>






              <p
                className="
                text-[#b88646]
                font-semibold
                "
              >

                {showPromo.subtitle} · DISKON {showPromo.discount}

              </p>





              <img

                src={showPromo.image}

                alt={showPromo.title}

                className="
                w-full
                h-56
                object-cover
                rounded-2xl
                mt-4
                "

              />





              <h2
                className="
                text-3xl
                font-bold
                text-[#4b2e1f]
                mt-6
                "
              >

                {showPromo.title}

              </h2>





              <p
                className="
                text-gray-600
                mt-4
                "
              >

                {showPromo.description}

              </p>





              <ul
                className="
                mt-5
                text-gray-600
                list-disc
                pl-5
                space-y-2
                "
              >

                {
                  showPromo.terms.map((term,index)=>(

                    <li key={index}>
                      {term}
                    </li>

                  ))
                }

              </ul>






              <a

                href="#form"

                className="
                inline-block
                mt-8
                bg-[#c88b38]
                text-[#4b2e1f]
                px-8
                py-3
                rounded-full
                font-semibold
                cursor-pointer
                hover:bg-[#b77a2d]
                transition
                "

              >

                Tanya Promo

              </a>





            </div>


          </div>


        )
      }




    </section>


  );

}



export default Promo;