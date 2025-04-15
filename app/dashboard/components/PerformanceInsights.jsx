import React from "react";

const sections = [
  {
    title: "Top Strengths",
    items: [
      { icon: "ti ti-check", text: "Technical Knowledge" },
      { icon: "ti ti-check", text: "Problem Solving" },
    ],
  },
  {
    title: "Areas to Improve",
    items: [
      { icon: "ti ti-chart-line", text: "Communication" },
      { icon: "ti ti-chart-line", text: "Leadership" },
    ],
  },
];

export const PerformanceInsights = () => {
  return (
    <div className="flex-1 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white p-6 rounded-xl">
      <div className="text-2xl font-bold mb-6">Performance Insights</div>
      <div className="flex gap-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex-1 bg-[rgba(255,255,255,0.1)] p-4 rounded-lg"
          >
            <div className="text-base font-bold mb-4">{section.title}</div>
            <ul className="m-0 p-0">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-center gap-2 text-base mb-2"
                >
                  <i className={item.icon} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
