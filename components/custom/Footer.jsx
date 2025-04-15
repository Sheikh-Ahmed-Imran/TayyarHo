import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] p-6">
      <div className="flex justify-between items-center max-w-[1136px] mx-auto my-0">
        <div className="text-white text-base">
          © 2025 AI Interview Platform
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-white hover:opacity-80 transition-opacity"
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="14:306" layer-name="Frame" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-icon" style="width: 16px; height: 16px; fill: #fff"> <g clip-path="url(#clip0_14_306)"> <path d="M14.8553 4.741C14.8655 4.88313 14.8655 5.02529 14.8655 5.16741C14.8655 9.50241 11.566 14.4973 5.53553 14.4973C3.67766 14.4973 1.95178 13.9593 0.5 13.0253C0.763969 13.0557 1.01775 13.0659 1.29188 13.0659C2.82484 13.0659 4.23603 12.5481 5.36294 11.6649C3.92131 11.6344 2.71319 10.6903 2.29694 9.39075C2.5 9.42119 2.70303 9.4415 2.91625 9.4415C3.21066 9.4415 3.50509 9.40088 3.77919 9.32985C2.27666 9.02525 1.14972 7.70547 1.14972 6.11157V6.07097C1.58625 6.31463 2.09391 6.46691 2.63194 6.48719C1.74869 5.89835 1.17003 4.89329 1.17003 3.75622C1.17003 3.1471 1.33244 2.58872 1.61672 2.10141C3.23094 4.09125 5.65734 5.39072 8.37813 5.53288C8.32738 5.28922 8.29691 5.03544 8.29691 4.78163C8.29691 2.9745 9.75884 1.50244 11.5761 1.50244C12.5203 1.50244 13.373 1.89838 13.972 2.53797C14.7131 2.39585 15.4238 2.12172 16.0533 1.7461C15.8096 2.50754 15.2918 3.14713 14.6116 3.55319C15.2715 3.48216 15.9111 3.29938 16.4999 3.0456C16.0533 3.69532 15.4949 4.27397 14.8553 4.741Z" fill="black"></path> </g> <defs> <clipPath id="clip0_14_306"> <path d="M0.5 0H16.5V16H0.5V0Z" fill="white"></path> </clipPath> </defs> </svg>',
              }}
            />
          </a>
          <a
            href="#"
            className="text-white hover:opacity-80 transition-opacity"
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="14:309" layer-name="Frame" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-icon" style="width: 16px; height: 16px; fill: #fff"> <g clip-path="url(#clip0_14_309)"> <path d="M13.5 1H1.49687C0.946875 1 0.5 1.45313 0.5 2.00938V13.9906C0.5 14.5469 0.946875 15 1.49687 15H13.5C14.05 15 14.5 14.5469 14.5 13.9906V2.00938C14.5 1.45313 14.05 1 13.5 1ZM4.73125 13H2.65625V6.31875H4.73438V13H4.73125ZM3.69375 5.40625C3.02812 5.40625 2.49063 4.86562 2.49063 4.20312C2.49063 3.54063 3.02812 3 3.69375 3C4.35625 3 4.89687 3.54063 4.89687 4.20312C4.89687 4.86875 4.35938 5.40625 3.69375 5.40625ZM12.5094 13H10.4344V9.75C10.4344 8.975 10.4187 7.97813 9.35625 7.97813C8.275 7.97813 8.10938 8.82188 8.10938 9.69375V13H6.03438V6.31875H8.025V7.23125H8.05312C8.33125 6.70625 9.00938 6.15312 10.0188 6.15312C12.1187 6.15312 12.5094 7.5375 12.5094 9.3375V13Z" fill="black"></path> </g> <defs> <clipPath id="clip0_14_309"> <path d="M0.5 0H14.5V16H0.5V0Z" fill="white"></path> </clipPath> </defs> </svg>',
              }}
            />
          </a>
          <a
            href="#"
            className="text-white hover:opacity-80 transition-opacity"
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="14:312" layer-name="Frame" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-icon" style="width: 16px; height: 16px; fill: #fff"> <g clip-path="url(#clip0_14_312)"> <path d="M5.68437 12.4187C5.68437 12.4812 5.6125 12.5312 5.52187 12.5312C5.41875 12.5406 5.34688 12.4906 5.34688 12.4187C5.34688 12.3562 5.41875 12.3062 5.50938 12.3062C5.60313 12.2969 5.68437 12.3469 5.68437 12.4187ZM4.7125 12.2781C4.69063 12.3406 4.75313 12.4125 4.84688 12.4312C4.92813 12.4625 5.02187 12.4312 5.04063 12.3687C5.05938 12.3062 5 12.2344 4.90625 12.2063C4.825 12.1844 4.73438 12.2156 4.7125 12.2781ZM6.09375 12.225C6.00313 12.2469 5.94062 12.3063 5.95 12.3781C5.95937 12.4406 6.04063 12.4813 6.13438 12.4594C6.225 12.4375 6.2875 12.3781 6.27812 12.3156C6.26875 12.2563 6.18437 12.2156 6.09375 12.225ZM8.15 0.25C3.81563 0.25 0.5 3.54063 0.5 7.875C0.5 11.3406 2.68125 14.3063 5.79688 15.35C6.19688 15.4219 6.3375 15.175 6.3375 14.9719C6.3375 14.7781 6.32812 13.7094 6.32812 13.0531C6.32812 13.0531 4.14062 13.5219 3.68125 12.1219C3.68125 12.1219 3.325 11.2125 2.8125 10.9781C2.8125 10.9781 2.09687 10.4875 2.8625 10.4969C2.8625 10.4969 3.64062 10.5594 4.06875 11.3031C4.75312 12.5094 5.9 12.1625 6.34688 11.9563C6.41875 11.4563 6.62188 11.1094 6.84688 10.9031C5.1 10.7094 3.3375 10.4562 3.3375 7.45C3.3375 6.59062 3.575 6.15938 4.075 5.60938C3.99375 5.40625 3.72813 4.56875 4.15625 3.4875C4.80937 3.28437 6.3125 4.33125 6.3125 4.33125C6.9375 4.15625 7.60938 4.06563 8.275 4.06563C8.94063 4.06563 9.6125 4.15625 10.2375 4.33125C10.2375 4.33125 11.7406 3.28125 12.3938 3.4875C12.8219 4.57188 12.5563 5.40625 12.475 5.60938C12.975 6.1625 13.2812 6.59375 13.2812 7.45C13.2812 10.4656 11.4406 10.7063 9.69375 10.9031C9.98125 11.15 10.225 11.6187 10.225 12.3531C10.225 13.4062 10.2156 14.7094 10.2156 14.9656C10.2156 15.1687 10.3594 15.4156 10.7563 15.3438C13.8813 14.3062 16 11.3406 16 7.875C16 3.54063 12.4844 0.25 8.15 0.25ZM3.5375 11.0281C3.49687 11.0594 3.50625 11.1313 3.55938 11.1906C3.60938 11.2406 3.68125 11.2625 3.72187 11.2219C3.7625 11.1906 3.75312 11.1187 3.7 11.0594C3.65 11.0094 3.57812 10.9875 3.5375 11.0281ZM3.2 10.775C3.17813 10.8156 3.20937 10.8656 3.27187 10.8969C3.32187 10.9281 3.38438 10.9187 3.40625 10.875C3.42812 10.8344 3.39687 10.7844 3.33437 10.7531C3.27187 10.7344 3.22187 10.7437 3.2 10.775ZM4.2125 11.8875C4.1625 11.9281 4.18125 12.0219 4.25312 12.0813C4.325 12.1531 4.41562 12.1625 4.45625 12.1125C4.49688 12.0719 4.47813 11.9781 4.41563 11.9187C4.34688 11.8469 4.25313 11.8375 4.2125 11.8875ZM3.85625 11.4281C3.80625 11.4594 3.80625 11.5406 3.85625 11.6125C3.90625 11.6844 3.99062 11.7156 4.03125 11.6844C4.08125 11.6438 4.08125 11.5625 4.03125 11.4906C3.9875 11.4188 3.90625 11.3875 3.85625 11.4281Z" fill="black"></path> </g> <defs> <clipPath id="clip0_14_312"> <path d="M0.5 0H16V16H0.5V0Z" fill="white"></path> </clipPath> </defs> </svg>',
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
