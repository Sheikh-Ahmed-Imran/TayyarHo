
export const TestimonialCard = ({ avatarUrl, name, role, rating, testimonial }) => {
    return (
      <article id='testimonials' className="flex flex-col bg-[rgba(255,255,255,0.10)] p-8 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={avatarUrl}
            alt={name}
            className="w-[48px] h-[48px] rounded-[9999px]"
          />
          <div className="flex flex-col">
            <div className="text-base font-bold text-white">{name}</div>
            <div className="text-base text-[rgba(255,255,255,0.60)]">{role}</div>
          </div>
        </div>
        <div className="text-base text-[rgba(255,255,255,0.80)] mt-4">
          {testimonial}
        </div>
      </article>
    );
  };