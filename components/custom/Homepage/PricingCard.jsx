
export const PricingCard = ({ title, price, period = "/month", features, ctaText }) => {
    return (
      <article className="flex flex-col bg-[rgba(255,255,255,0.10)] p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <div className="flex items-end gap-1 mb-8">
          <div className="text-4xl font-bold text-white">{price}</div>
          {period && (
            <div className="text-lg font-bold text-white mb-1">{period}</div>
          )}
        </div>
        <div className="flex flex-col gap-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-base text-[rgba(255,255,255,0.80)]"
            >
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[14px] h-[16px]"
              >
                <path
                  d="M13.7062 3.29376C14.0968 3.68439 14.0968 4.31876 13.7062 4.70939L5.70615 12.7094C5.31553 13.1 4.68115 13.1 4.29053 12.7094L0.290527 8.70939C-0.100098 8.31876 -0.100098 7.68439 0.290527 7.29376C0.681152 6.90314 1.31553 6.90314 1.70615 7.29376L4.9999 10.5844L12.2937 3.29376C12.6843 2.90314 13.3187 2.90314 13.7093 3.29376H13.7062Z"
                  fill="black"
                />
              </svg>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
        <button className="bg-[#00F7FF] text-blue-900 font-bold cursor-pointer px-8 py-3.5 rounded-full hover:bg-[#00E5ED] transition-colors">
          {ctaText}
        </button>
      </article>
    );
  };
  