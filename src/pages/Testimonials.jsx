import React from "react";
import testimonials from "../data/testinomials";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="container section">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
      </div>
    </section>
  );
};

export default Testimonials;
