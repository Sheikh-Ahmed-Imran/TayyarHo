import React from "react";
import Link from "next/link";
export const HeroSection = () => {
  return (
    <section className="flex w-full h-[800px] justify-center items-center bg-[linear-gradient(90deg,#8B5CF6_0%,#3B82F6_100%)] px-20 py-[104px] max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-[40px] relative z-10">
      <div className="flex w-full max-w-screen-xl justify-center items-center gap-12 max-md:flex-col max-sm:flex-col-reverse mt-[-200px] max-sm:mt-[-100px]">
        <div className="flex flex-col w-full max-w-[592px] ">
          <h1 className="text-6xl font-bold leading-[60px] text-white mb-8 max-md:text-5xl max-md:mb-10 max-sm:text-3xl max-sm:leading-[40px]">
            Master Your Interview with AI-Powered Practice
          </h1>
          <p className="text-xl text-white mb-[58px] max-md:text-lg max-md:mb-8 max-sm:text-sm max-sm:mb-6">
            Get real-time feedback, personalized coaching, and AI-generated
            interview questions tailored to your industry.
          </p>
          <div className="flex gap-4 max-sm:flex-col max-sm:mb-[350px]">
            <Link href='/dashboard'className="bg-[#00F7FF] text-blue-900 font-bold cursor-pointer px-8 py-5 rounded-full hover:bg-[#00E5ED] transition-colors">
              Get Started 
            </Link>
            <Link href='https://github.com/Sheikh-Ahmed-Imran/TayyarHo' className="flex justify-center items-center gap-2 text-white font-bold cursor-pointer px-[34px] py-5 rounded-full border-2 border-[#00F7FF] hover:bg-[rgba(255,255,255,0.1)] transition-colors">
              <svg
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.375 1.21884C1.9125 0.934468 1.33125 0.925093 0.859375 1.19072C0.3875 1.45634 0.09375 1.95634 0.09375 2.50009V13.5001C0.09375 14.0438 0.3875 14.5438 0.859375 14.8095C1.33125 15.0751 1.9125 15.0626 2.375 14.7813L11.375 9.28134C11.8219 9.00947 12.0938 8.52509 12.0938 8.00009C12.0938 7.47509 11.8219 6.99384 11.375 6.71884L2.375 1.21884Z"
                  fill="currentColor"
                />
              </svg>
              Watch Demo
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b74e721c1367c5fbcc61e3fed127cf54d88024cb"
          alt="AI Interview Practice Demo"
          className="w-full max-w-[592px] h-[592px] rounded-[12px] shadow-[0px_25px_50px_0px_rgba(0,_0,_0,_0.25)] mt-[200px] max-sm:mt-[400px] max-sm:h-[300px] max-sm:w-[300px]"
        />
      </div>
    </section>
  );
};
