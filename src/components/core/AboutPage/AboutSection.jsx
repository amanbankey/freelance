import React from 'react'

const AboutSection = () => {
  return (
    <div>
           <section className="w-full bg-[#f3f3f3]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-4 sm:pt-5 md:pt-6 lg:pt-4 pb-14 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="w-full border-b border-[#cfcfcf] pb-3">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs md:text-[13px] tracking-[0.22em] text-[#2f2f2f] uppercase">
            <span>Home</span>
            <span className="text-[#4a4a4a]">&gt;</span>
            <span>About Us</span>
          </div>
        </div>

        <div className="flex justify-center text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
          <p className="max-w-[780px] text-[#4a4a4a] font-light leading-[1.55] text-[22px]  ">
            JSW, born from a visionary dream, is a global force driving industry
            transformation. We empower communities and shape India’s future with trust,
            excellence, and a relentless focus on sustainable growth, making a lasting impact
            across every sector we touch.
          </p>
        </div>

        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-0">
            <h2 className="text-[#111111] font-light leading-none text-[40px] ">
              35.7 MTPA
            </h2>
            <p className="mt-3 text-[#2e2e2e] text-[16px]   leading-[1.4]">
              Total Steel Capacity in India and the USA
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-0 md:border-l md:border-r border-[#d8d8d8]">
            <h2 className="text-[#111111] font-light leading-none text-[40px]">
              13.2 GW
            </h2>
            <p className="mt-3 text-[#2e2e2e] text-[16px]  leading-[1.4]">
              Locked-in Power Generation Portfolio
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-0">
            <h2 className="text-[#111111] font-light leading-none text-[40px] ">
              177 MTPA
            </h2>
            <p className="mt-3 text-[#2e2e2e] text-[16px]   leading-[1.4]">
              Installed Cargo Handling Capacity
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutSection