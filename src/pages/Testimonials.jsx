import React from "react";
import testimonials from "../data/testinomials";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="container section">
      <h2>Testimonials</h2>
      <TestimonialCard />
    </section>
  );
};

export default Testimonials;
