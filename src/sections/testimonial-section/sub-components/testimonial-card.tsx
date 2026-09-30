import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Testimonial } from "../interface";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col rounded-2xl border-0 bg-background p-0 shadow-lg">
      <CardContent className="p-6">
        <div className="h-14 w-14 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3 className="font-heading mt-4 text-xl font-bold text-black">{testimonial.name}</h3>
          <p className="font-body text-lg font-medium text-persian-blue-600">{testimonial.role}</p>
        </div>

        <p className="font-body mt-4 text-lg leading-relaxed text-shuttle-gray-500">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}
