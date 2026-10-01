"use client";

import { SvgItems } from "@/components/svg-items";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { useRef } from "react";
import { testimonials } from "./data";
import { TestimonialCard } from "./sub-components/testimonial-card";

export function TestimonialsSection() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonial-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: scope.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="relative overflow-hidden container section-y flex flex-col gap-6 md:gap-10 lg:gap-18"
    >
      <SvgItems
        variant="item-one"
        className="absolute pointer-events-none overflow-hidden top-0 right-50 hidden lg:block -z-10"
      />
      <SvgItems
        variant="item-five"
        className="absolute pointer-events-none overflow-hidden bottom-0 right-0 rotate-180 hidden lg:block -z-10"
      />
      <SvgItems
        variant="item-four"
        className="absolute pointer-events-none overflow-hidden bottom-0 -left-6 rotate-90 hidden lg:block -z-10"
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
        <h2 className="testimonial-reveal font-heading text-3xl font-bold text-shuttle-gray-800 sm:text-4xl">
          Discover What Our Community Is Saying
        </h2>
        <p className="testimonial-reveal font-body text-sm text-shuttle-gray-500 sm:text-base">
          At ByteSpace, our vibrant community of learners and creators is at the heart of what we
          do. Hear directly from those who have experienced the transformative journey of learning
          and creating on our platform. Explore testimonials that reflect the diverse perspectives
          of enthusiastic learners and accomplished creators.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:gap-18 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-reveal">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
}
