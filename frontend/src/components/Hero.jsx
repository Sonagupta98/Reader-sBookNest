import { useState } from "react";
import { useNavigate } from "react-router";
import BgVideo from "../assets/bg_video.mp4";
const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);

    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div className="relative h-[75vh] lg:h-[90vh] text-[#FFFCF2] px-4 md:px-12 overflow-hidden">
      <div className="bg-[#252422] w-full h-full absolute top-0 left-0 opacity-70 -z-10"></div>
      <div className="absolute inset-0 -z-20">
        <video
          className="object-cover object-center w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center !z-50">
        <h1 className="text-3xl md:text-4xl lg:text-6xl pb-8 lg:pb-12 text-center max-w-5xl -mt-20">
          Share the books you <span className="text-[#EB5E28]">love</span> and explore new{" "}
          <span className="text-[#5adbb5]">favorites</span> recommended by fellow {" "}
          <span className="text-[#ffbd03]">readers.</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-sm md:max-w-xl lg:max-w-3xl text-base lg:text-lg"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g. Rich Dad Poor Dad"
            className="w-full px-3 py-1.5 md:py-2 text-[#181716] rounded-lg placeholder:text-gray-600 bg-[#FFFCF2]"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 bg-[#5adbb5] px-4 border border-white transitionfont-semibold rounded-r-lg"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
