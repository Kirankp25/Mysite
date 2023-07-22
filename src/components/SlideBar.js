import "../App.css";
import DownloadIcon from "@mui/icons-material/Download";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useState } from "react";

export default function Slidebar() {
  const [select, setSelect] = useState(0);
  return (
    <div className="flex-none  bg-black h-screen min-w-[25%] fixed ">
      <div className="nav flex  text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden">
        <div data-aos="slide-down">
          <img
            src={require("../assets/images/profile.JPG")}
            alt="Daniel Jebarson"
            className="rounded-full border-solid cursor-pointer  border-[8px] border-stone-600 min-h-fit mx-auto  max-w-[190px]"
          />
          <h3 className="text-white name py-4 font-medium ">
            Kiran Patil
          </h3>
        </div>
        <p
          onClick={() => setSelect(0)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 0 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="200"
        >
          <a href="/#">Home</a>
        </p>
        <p
          onClick={() => setSelect(1)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 1 ? "text-blue-600 " : ""
          }`}
          data-aos-delay="600"
          data-aos="slide-left"
        >
          <a href="#about"> About Me</a>
        </p>
        <p
          onClick={() => setSelect(2)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 2 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="1000"
        >
          <a href="#resume">Academics</a>
        </p>
        <p
          onClick={() => setSelect(3)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 3 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-left"
          data-aos-delay="1400"
        >
          <a href="#projects">Projects</a>
        </p>
        <p
          onClick={() => setSelect(4)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 4 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="1800"
        >
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div
        className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
        data-aos="slide-up"
        data-aos-delay="2300"
      >
        <div
          onClick={() =>
            window.open("https://github.com/Kirankp25", "_blank")
          }
        >
          <GitHubIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/kirankp25", "_blank")
          }
        >
          {" "}
          <InstagramIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/kirankp25/",
              "_blank"
            )
          }
        >
          {" "}
          <LinkedInIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://twitter.com/Kiran_Patil25",
              "_blank"
            )
          }
        >
          {" "}
          <TwitterIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open("https://www.facebook.com/profile.php?id=100022518962403", "_blank")
          }
        >
          <FacebookIcon className="cursor-pointer hover:scale-105" />
        </div>
       
      </div>
      <div className="flex-none  bg-black h-screen min-w-[25%] fixed ">
      <div className="nav flex  text-white text-lg mt-6 flex-col align-middle justify-center text-center w-full gap-3 overflow-hidden">
      <a
            href={require("../assets/files/Kiran_Resume_Off.pdf")}
            download={"Kiran_Resume_Off"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
           Resume <DownloadIcon />
          </a>
          </div>
          </div>
     
    </div>
  );
}
