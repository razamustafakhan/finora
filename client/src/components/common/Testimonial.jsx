import React from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const feedbacks = [
    {
      number: "01",
      name: "Sarah Johnson",
      role: "Startup Founder",
      comment:
        "The application process was incredibly smooth and the approval was faster than expected.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
    },
    {
      number: "02",
      name: "James Wilson",
      role: "Business Owner",
      comment:
        "Professional service with transparent repayment terms. The entire experience felt clear and straightforward.",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      rating: 4.5,
    },
    {
      number: "03",
      name: "Amina Patel",
      role: "Marketing Consultant",
      comment:
        "The digital process was simple and the support throughout the loan journey made everything easier to understand.",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
      rating: 4,
    },
    {
      number: "04",
      name: "Michael Lee",
      role: "Entrepreneur",
      comment:
        "Fast funding and a clean application experience. Everything felt modern, organized, and secure.",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1 text-[#ff0066]">
        {Array.from({ length: fullStars }).map((_, index) => (
          <FaStar key={`full-${index}`} className="text-sm" />
        ))}

        {hasHalfStar && <FaStarHalfAlt className="text-sm" />}

        {Array.from({ length: emptyStars }).map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-sm" />
        ))}
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
      {/* BACKGROUND ACCENT */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#ff0066]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#ff0066]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff0066]">
                Client Stories
              </span>
            </div>

            <h2 className="max-w-lg text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Real experiences.
              <br />
              <span className="text-neutral-500">Real people.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-400 lg:ml-auto lg:text-lg">
            See how customers describe their experience with a lending journey
            designed around simplicity, clarity, and digital access.
          </p>
        </div>

        {/* TESTIMONIAL SLIDER */}
        <div className="mt-16 lg:mt-20">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            className="testimonial-swiper"
          >
            {feedbacks.map((item) => (
              <SwiperSlide key={item.number}>
                <div className="grid min-h-[440px] overflow-hidden border border-white/10 lg:grid-cols-[0.7fr_1.3fr]">
                  {/* LEFT PANEL */}
                  <div className="relative flex flex-col justify-between bg-[#ff0066] p-8 sm:p-10 lg:p-12">
                    {/* LARGE QUOTE */}
                    <FaQuoteLeft className="text-6xl text-black/20" />

                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/60">
                        Customer
                      </span>

                      <div className="mt-5 flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-full border-2 border-black object-cover"
                        />

                        <div>
                          <h3 className="font-bold text-black">{item.name}</h3>

                          <p className="mt-1 text-sm text-black/60">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* NUMBER */}
                    <span className="absolute bottom-5 right-7 text-7xl font-black leading-none text-black/10">
                      {item.number}
                    </span>
                  </div>

                  {/* RIGHT PANEL */}
                  <div className="relative flex flex-col justify-between bg-neutral-950 p-8 sm:p-10 lg:p-14">
                    {/* TOP */}
                    <div className="flex items-center justify-between">
                      {renderStars(item.rating)}

                      <span className="text-xs font-bold tracking-[0.2em] text-neutral-600">
                        {item.number} / 04
                      </span>
                    </div>

                    {/* QUOTE */}
                    <div className="my-12">
                      <blockquote className="max-w-4xl text-2xl font-medium leading-[1.35] tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl">
                        “{item.comment}”
                      </blockquote>
                    </div>

                    {/* BOTTOM */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Verified experience
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#ff0066]">
                        <FaArrowRight className="text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM PAGINATION */}
          <div className="mt-8 flex items-center justify-between">
            <div className="testimonial-pagination !static !flex w-auto items-center gap-2" />

            <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 sm:block">
              Customer feedback
            </span>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-neutral-500">
            We believe a better financial experience starts with making every
            step easier to understand.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ff0066]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Built around people
            </span>
          </div>
        </div>
      </div>

      {/* SWIPER PAGINATION STYLES */}
      <style>{`
        .testimonial-pagination .swiper-pagination-bullet {
          width: 28px;
          height: 3px;
          border-radius: 0;
          background: #525252;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .testimonial-pagination .swiper-pagination-bullet-active {
          width: 50px;
          background: #ff0066;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
