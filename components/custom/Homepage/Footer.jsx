import React from "react";
import  FooterSection  from "./FooterSection";
import  {SocialLinks}  from "./SocialLinks";

const quickLinks = [
  { text: "Features", href: "#features" },
  { text: "How It Works", href: "#howitworks" },
  { text: "Testimonials", href: "#testimonials" },
];



export const Footer= () => {
  return (
    <footer className="flex w-full bg-violet-500 pt-12 pb-0 px-20 max-md:pt-8 max-md:pb-0 max-md:px-10 max-sm:pt-6 max-sm:pb-0 max-sm:px-5">
      <div className="flex w-full flex-col gap-8 max-md:gap-6 max-sm:gap-5">
        <div className="flex w-full justify-between gap-8 max-md:flex-wrap max-sm:flex-col">
          <div className="flex flex-col gap-6 max-w-[284px] max-md:max-w-none">
            <h1 className="text-white text-xl font-bold leading-5">TayyarHo</h1>
            <p className="text-[rgba(255,255,255,0.8)] text-base font-normal leading-4">
              Empowering job seekers with AI- powered interview preparation.
            </p>
          </div>

          <FooterSection title="Quick Links" links={quickLinks} />
       

          <div className="flex flex-col gap-[18px] max-w-[284px] max-md:max-w-none">
            <h2 className="text-white text-base font-bold leading-4">
              Connect With Me
            </h2>
            <SocialLinks />
          </div>
        </div>

        <div className="text-[rgba(255,255,255,0.6)] text-center text-base font-normal leading-4 border pt-[35px] pb-0.5 border-[rgba(255,255,255,0.2)]">
          © 2025 TayyarHo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};