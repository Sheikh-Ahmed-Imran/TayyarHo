import React from "react";
import { TestimonialCard } from "./TestemonialCard";

export const TestimonialsSection= () => {
  const testimonials = [
    {
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aaa2be9e0f703161473776d1c8dc7e751e2111b0",
      name: "Sarah Johnson",
      role: "Software Engineer",
      rating: 5,
      testimonial:
        '"The AI feedback helped me improve my interview skills dramatically. Landed my dream job at a top tech company!"',
    },
    {
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/90d2b95bf7d9f3d35e952097b86966dabd30c553",
      name: "Michael Chen",
      role: "Product Manager",
      rating: 5,
      testimonial:
        '"The real-time feedback on my body language and speaking pace was invaluable. Highly recommend!"',
    },
    {
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fee795868a537d10d66a6dec7297140fb174dde0",
      name: "Emily Rodriguez",
      role: "Marketing Director",
      rating: 5,
      testimonial:
        '"The industry-specific questions were spot on and fully prepared me for my actual interview."',
    },
  ];

  return (
    <section className="flex w-full justify-center items-center bg-blue-500 p-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="flex flex-col w-full max-w-screen-xl items-center">
        <h2 className="text-4xl font-bold text-white mb-[62px]">
          What Users Say
        </h2>
        <div className="grid grid-cols-3 gap-8 w-full max-md:grid-cols-2 max-sm:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatarUrl={testimonial.avatarUrl}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
