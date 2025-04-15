import React from "react";

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col bg-[rgba(255,255,255,0.10)] p-8 rounded-2xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-base text-[rgba(255,255,255,0.80)]">{description}</p>
    </article>
  );
};
