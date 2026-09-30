import { OrnamentItems } from "@/components/ornament-items";
import { FeatureRow } from "./sub-components/feature-row";

export function CareerGrowthSection() {
  return (
    <section className="container relative flex flex-col">
      {/*decorative backgrounds  */}
      <OrnamentItems
        variant="item-seven"
        className="absolute pointer-events-none overflow-hidden top-0 -left-38 hidden lg:block"
      />
      <OrnamentItems
        variant="item-eight"
        className="absolute pointer-events-none overflow-hidden top-0 right-0 hidden lg:block"
      />
      <OrnamentItems
        variant="item-nine"
        className="absolute pointer-events-none overflow-hidden bottom-0 left-0 hidden lg:block"
      />
      <OrnamentItems
        variant="item-eleven"
        className="absolute pointer-events-none overflow-hidden bottom-0 left-0 hidden lg:block"
      />
      <OrnamentItems
        variant="item-ten"
        className="absolute pointer-events-none overflow-hidden bottom-0 right-0 hidden lg:block"
      />

      <FeatureRow
        imagePosition="right"
        title="Your Path to Professional Growth Starts Here!"
        description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
        stats={[
          { value: "12K", label: "Students" },
          { value: "70+", label: "Courses" },
          { value: "16", label: "Creators" },
        ]}
      />

      <FeatureRow
        imagePosition="left"
        title="Create & Manage Courses Easily."
        description="ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses."
        checklist={[
          "Share Your Expertise",
          "Monetize Your Passion",
          "Flexibility and Autonomy",
          "Build a Community",
        ]}
      />
    </section>
  );
}
