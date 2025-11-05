// import React from "react";
// import { logo } from "../../../constant";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { TiSocialTwitter } from "react-icons/ti";
// import { FaGithub } from "react-icons/fa";

// const FooterPage = () => {
//   return (
//     <>
//       <div className="bg-gray-300 p-10  flex  justify-between w-full">
//         <div className="ml-[40px]  w-[20rem] ">
//           <img src={logo} alt="" className=" w-[120px] h-[20px]" />
//           <p className="text-black pt-4  w-[70%] text-xs leading-2">
//             We have clothes that suits your style and which you’re proud to
//             wear. From women to men.
//           </p>
//           <ul className="flex gap-4 text-gray-200 mt-4 text-xl rounded-md  w-[70%]">
//             <li>
//               <TiSocialTwitter />
//             </li>
//             <li className="bg-black ">
//               <FaFacebook />
//             </li>
//             <li className="bg-white text-black">
//               <FaInstagram />
//             </li>
//             <li>
//               <FaGithub />
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h2>Company</h2>
//           <ul className="text-xs leading-8">
//             <li>About</li>
//             <li>About</li>
//             <li>About</li>
//             <li>About</li>
//           </ul>
//         </div>
//             <div>
//           <h2>Company</h2>
//           <ul className="text-xs leading-8">
//             <li>About</li>
//             <li>About</li>
//             <li>About</li>
//             <li>About</li>
//           </ul>
//         </div>
//             <div>
//           <h2>Company</h2>
//           <ul className="text-xs leading-8">
//             <li>About</li>
//             <li>About</li>
//             <li>About</li>
//             <li>About</li>
//           </ul>
//         </div>
//             <div>
//           <h2>Company</h2>
//           <ul className="text-xs leading-8">
//             <li>About</li>
//             <li>About</li>
//             <li>About</li>
//             <li>About</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FooterPage;


import React from "react";
import { logo } from "../../../constant";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiMail } from "react-icons/ti";


const FooterPage = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About", " Features", "Works" , "Career"],
    },
    {
      title: "HELP",
      links: ["Customer Support", "Delivery Details", "Terms of Service", "Privacy Policy"],
    },
    {
      title: "FAG",
      links: ["Acoount", "Management Deliveries", "Orders", "Payments"],
    },
    {
      title: "Rsourse",
      links: ["Free eBook", "Deveopment Tutorial", "How to -Blog", "Youtube blog"],
    },
  ];

  return (
    <>
     {/* <div className="bg-black  p-[20px] flex justify-between mx-7 rounded-xl ">
<h2 className="text-white font-bold text-2xl w-[25%]">
  STAY UPTO DATE ABOUT OUR LATEST OFFERS
</h2>
<div  className="max-w-[20rem] space-y-3">
   <div className="relative flex-1  mx-auto">
            <TiMail
 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            <input
              type="search"
              placeholder="Enter your email address"
              className="w-full pl-10 pr-4 py-2 rounded-3xl bg-[#F0F0F0]  outline-none text-sm"
            />
          </div>
            <div className="  mx-auto ">
  
            <input
              type="search"
              placeholder="Subscribe to Newsletter"
              className="w-full pl-10 pr-4 py-2 rounded-3xl bg-[#F0F0F0] text-sm outline-none text-center"
            />
          </div>
</div>
      </div> */}
    


  
    <div className="bg-black p-6 md:p-10 flex flex-col md:flex-row justify-between items-center mx-7 rounded-xl gap-6">
      <h2 className="text-white font-bold text-2xl md:w-[40%] text-center md:text-left">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h2>

      <div className="w-full md:w-[25rem] space-y-3 ">
        
        <div className="relative ">
          <TiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full pl-10 pr-4 py-2 rounded-3xl bg-[#F0F0F0] outline-none  text-sm"
          />
        </div>

        
        <button className="w-full py-2 rounded-3xl bg-white text-black text-sm hover:bg-gray-200 transition">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  



    
    <div className="bg-gray-200 py-10 px-8 md:px-16 w-full">
      
     
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-5">
        
        <div className=" md:w-[20rem]">
          <img src={logo} alt="Brand Logo" className="w-[120px] h-[20px]" />
          <p className="text-black pt-4 text-sm leading-6 w-[90%]">
            We have clothes that suit your style and make you proud to wear them.
            From women to men.
          </p>
          <ul className="flex gap-3 text-lg mt-4">
            <li className="p-2 bg-black text-white rounded-md hover:bg-gray-700 transition">
              <TiSocialTwitter />
            </li>
            <li className="p-2 bg-black text-white rounded-md hover:bg-gray-700 transition">
              <FaFacebook />
            </li>
            <li className="p-2 bg-black text-white rounded-md hover:bg-gray-700 transition">
              <FaInstagram />
            </li>
            <li className="p-2 bg-black text-white rounded-md hover:bg-gray-700 transition">
              <FaGithub />
            </li>
          </ul>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h2 className="font-semibold mb-3">{section.title}</h2>
              <ul className="text-sm space-y-5 text-gray-700">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-black cursor-pointer transition">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    
      <div className="border-t border-gray-400 mt-10 pt-4  text-xs text-gray-600">
        © {new Date().getFullYear()} Shop.co All rights reserved.
        <div>
          <div>
            
          </div>

        </div>
      </div>
    </div>.
    </>
  );
};

export default FooterPage;
