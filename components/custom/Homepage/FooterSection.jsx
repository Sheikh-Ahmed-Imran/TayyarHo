import React from "react";

const FooterSection = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-[18px] max-w-[284px] max-md:max-w-none">
      <h2 className="text-white text-base font-bold leading-4">{title}</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-[rgba(255,255,255,0.8)] text-base font-normal hover:text-white transition-colors"
          >
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FooterSection;
