import React from "react";
import { PricingCard } from "./PricingCard";

export const PricingSection= () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "$0",
      features: [
        { text: "5 AI Interview Sessions" },
        { text: "Basic Performance Analytics" },
        { text: "Standard Question Bank" },
      ],
      ctaText: "Start Free",
    },
    {
      title: "Pro",
      price: "$29",
      features: [
        { text: "Unlimited AI Sessions" },
        { text: "Advanced Analytics" },
        { text: "Industry-Specific Questions" },
        { text: "Video Recording & Review" },
      ],
      ctaText: "Go Pro",
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        { text: "Custom AI Training" },
        { text: "Team Management" },
        { text: "API Access" },
        { text: "Dedicated Support" },
      ],
      ctaText: "Contact Sales",
    },
  ];

  return (
    <section className="flex w-full justify-center items-center bg-[linear-gradient(90deg,#8B5CF6_0%,#3B82F6_100%)] p-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="flex flex-col w-full max-w-screen-xl items-center">
        <h2 className="text-4xl font-bold text-white mb-[62px]">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-3 gap-[22px] w-full max-md:grid-cols-2 max-sm:grid-cols-1">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              ctaText={plan.ctaText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};