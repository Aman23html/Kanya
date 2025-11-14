import React from "react";
import testimonials from "../data/testinomials";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <section className=" mt-10">
      <h2>Testimonials</h2>
      <TestimonialCard />
    </section>
  );
};

export default Testimonials;
