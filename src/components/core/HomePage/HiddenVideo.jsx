
import video from "../../../assets/ai.mp4";


const HiddenVideo = () => {
  return (

<section className="relative">

  {/* 🔥 Background Video (Fixed Behind Everything) */}
  <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* 🔥 Desktop Content */}
  <div className="hidden md:flex relative z-10 w-full h-[90vh] flex-col justify-center px-6 md:px-10">
    <div className="h-[50vh]">
      {/* <p className="text-sm md:text-base text-white tracking-wide mb-4">
        DUAL-VIEW VIDEO, HDR, NIGHT PORTRAIT
      </p> */}

      {/* <h1 className="text-3xl md:text-6xl font-semibold text-white max-w-2xl leading-snug mt-4">
        OnePlus Nord Dual Sim Blue 12GB RAM
      </h1> */}

      {/* <p className="text-lg md:text-xl text-white mt-4">
        Starting At{" "}
        <span className="text-white text-4xl font-semibold">$299.99</span>
      </p> */}

      {/* <button className="mt-6 w-fit bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
        SHOP NOW
      </button> */}
    </div>
  </div>

  {/* 🔥 Mobile Content */}
  <div className="relative z-10 md:hidden h-[50vh] flex items-center px-6">
    <div className="max-w-xl text-white">
      {/* <p className="text-xs uppercase tracking-wider text-gray-300 mb-3">
        Dual-view video, HDR, Night Portrait
      </p> */}

      {/* <h1 className="text-2xl font-bold leading-snug">
        OnePlus Nord Dual Sim <br />
        <span className="text-cyan-400">Blue 12GB RAM</span>
      </h1>

      <p className="text-lg mt-4">
        Starting At <span className="font-bold">$299.99</span>
      </p> */}

      {/* <button className="mt-6 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-md hover:bg-cyan-400 transition">
        SHOP NOW
      </button> */}
    </div>
  </div>

</section>


  );
};

export default HiddenVideo;

