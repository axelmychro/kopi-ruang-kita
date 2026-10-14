import { useState } from "react";

import kopiSusu from "../assets/images/kopi-susu-gula-aren.jpg";
import americano from "../assets/images/americano.jpg";
import cappuccino from "../assets/images/cappuccino.jpg";
import caramel from "../assets/images/caramel-macchiato.jpg";
import espresso from "../assets/images/espresso.jpg";
import latte from "../assets/images/kopi-latte.jpg";
import moka from "../assets/images/moka.jpg";

import matcha from "../assets/images/matcha-latte.jpg";
import thaiTea from "../assets/images/thai-tea.jpg";
import redVelvet from "../assets/images/red-velvet-latte.jpg";
import taro from "../assets/images/taro-latte.jpg";
import lemonTea from "../assets/images/es-lemon-tea.jpg";
import cokelat from "../assets/images/cokelat-klasik.jpg";

import croissant from "../assets/images/croissant.jpg";
import brownies from "../assets/images/brownies.jpg";
import kentang from "../assets/images/kentang-goreng.jpg";
import roti from "../assets/images/roti-bakar.jpg";
import donat from "../assets/images/donat.jpg";
import pisang from "../assets/images/pisang-goreng.jpg";
import cookies from "../assets/images/cookies.jpg";


function Menu() {


  const [category, setCategory] = useState("All");


  const menus = [

    {
      id:1,
      name:"Kopi Susu Gula Aren",
      category:"Coffee",
      price:"Rp18.000",
      image:kopiSusu,
      description:"Espresso, susu segar, dan gula aren khas Nusantara."
    },

    {
      id:2,
      name:"Americano",
      category:"Coffee",
      price:"Rp15.000",
      image:americano,
      description:"Kopi hitam dengan rasa espresso yang kuat."
    },

    {
      id:3,
      name:"Cappuccino",
      category:"Coffee",
      price:"Rp20.000",
      image:cappuccino,
      description:"Espresso dengan susu steamed dan foam lembut."
    },

    {
      id:4,
      name:"Caramel Macchiato",
      category:"Coffee",
      price:"Rp22.000",
      image:caramel,
      description:"Espresso creamy dengan caramel manis."
    },

    {
      id:5,
      name:"Espresso",
      category:"Coffee",
      price:"Rp12.000",
      image:espresso,
      description:"Kopi espresso murni dengan rasa intens."
    },

    {
      id:6,
      name:"Cafe Latte",
      category:"Coffee",
      price:"Rp20.000",
      image:latte,
      description:"Espresso dengan susu creamy."
    },

    {
      id:7,
      name:"Moka",
      category:"Coffee",
      price:"Rp23.000",
      image:moka,
      description:"Perpaduan espresso dan cokelat."
    },


    {
      id:8,
      name:"Matcha Latte",
      category:"Non-Coffee",
      price:"Rp22.000",
      image:matcha,
      description:"Matcha premium dengan susu creamy."
    },

    {
      id:9,
      name:"Thai Tea",
      category:"Non-Coffee",
      price:"Rp20.000",
      image:thaiTea,
      description:"Thai tea segar khas Thailand."
    },

    {
      id:10,
      name:"Red Velvet Latte",
      category:"Non-Coffee",
      price:"Rp22.000",
      image:redVelvet,
      description:"Minuman red velvet lembut."
    },

    {
      id:11,
      name:"Taro Latte",
      category:"Non-Coffee",
      price:"Rp21.000",
      image:taro,
      description:"Taro creamy dengan rasa manis."
    },

    {
      id:12,
      name:"Es Lemon Tea",
      category:"Non-Coffee",
      price:"Rp15.000",
      image:lemonTea,
      description:"Teh lemon segar."
    },

    {
      id:13,
      name:"Cokelat Klasik",
      category:"Non-Coffee",
      price:"Rp20.000",
      image:cokelat,
      description:"Minuman cokelat creamy."
    },


    {
      id:14,
      name:"Croissant",
      category:"Snack",
      price:"Rp15.000",
      image:croissant,
      description:"Croissant butter renyah."
    },

    {
      id:15,
      name:"Brownies Cokelat",
      category:"Snack",
      price:"Rp18.000",
      image:brownies,
      description:"Brownies cokelat lembut."
    },

    {
      id:16,
      name:"Kentang Goreng",
      category:"Snack",
      price:"Rp17.000",
      image:kentang,
      description:"Kentang crispy."
    },

    {
      id:17,
      name:"Roti Bakar",
      category:"Snack",
      price:"Rp16.000",
      image:roti,
      description:"Roti bakar hangat."
    },

    {
      id:18,
      name:"Donat",
      category:"Snack",
      price:"Rp12.000",
      image:donat,
      description:"Donat lembut."
    },

    {
      id:19,
      name:"Pisang Goreng",
      category:"Snack",
      price:"Rp15.000",
      image:pisang,
      description:"Pisang goreng renyah."
    },

    {
      id:20,
      name:"Cookies",
      category:"Snack",
      price:"Rp14.000",
      image:cookies,
      description:"Cookies teman kopi."
    }

  ];



  const filteredMenus =
    category === "All"
    ? menus
    : menus.filter(
      item => item.category === category
    );



  return (

    <section
      id="menu"
      className="
      bg-[#f8f3ed]
      py-20
      px-8
      "
    >


      <div className="text-center mb-12">

        <h2 className="
        text-4xl
        font-bold
        text-[#4b2e1f]
        ">
          Menu Coffee Shop
        </h2>


        <p className="text-gray-600 mt-3">
          Nikmati pilihan kopi, non-coffee,
          dan snack terbaik kami.
        </p>

      </div>



      <div className="
      flex
      justify-center
      gap-4
      flex-wrap
      mb-12
      ">

        {
          ["All","Coffee","Non-Coffee","Snack"].map(item=>(

            <button

            key={item}

            onClick={()=>setCategory(item)}

            className="
            px-6
            py-2
            rounded-full
            bg-white
            border
            border-[#6f4e37]
            text-[#6f4e37]
            cursor-pointer
            hover:bg-[#6f4e37]
            hover:text-white
            transition
            "
            >

              {item}

            </button>

          ))
        }

      </div>



      <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-8
      ">


      {
        filteredMenus.map(item=>(

          <div
          key={item.id}
          className="
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-md
          hover:-translate-y-2
          hover:shadow-xl
          transition
          "
          >


            <div className="overflow-hidden">

              <img
              src={item.image}
              alt={item.name}
              className="
              w-full
              h-52
              object-cover
              hover:scale-110
              transition
              duration-500
              "
              />

            </div>


            <div className="p-5">

              <p className="text-[#8b5e3c] text-sm">
                {item.category}
              </p>

              <h3 className="text-xl font-bold mt-2">
                {item.name}
              </h3>


              <p className="text-gray-600 text-sm mt-2">
                {item.description}
              </p>


              <p className="
              mt-4
              font-bold
              text-[#6f4e37]
              ">
                {item.price}
              </p>


            </div>


          </div>

        ))
      }


      </div>


    </section>

  );

}


export default Menu;