import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    // hook this to email service / backend. For now simply log.
    alert("Thank you! We received your message.");
    console.log("contact form:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="container section">
      <h2>Contact Us</h2>
      <div className="contact-grid">
        <form onSubmit={submit} className="contact-form">
          <label>Name</label>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required/>
          <label>Email</label>
          <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <label>Message</label>
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows="6" required/>
          <button type="submit" className="btn">Submit</button>
        </form>

        <div className="contact-details">
          <h3>Get connected with us</h3>
          <p>Email: account@sevapatra.org</p>
          <p>Phone: 9102971230</p>
          <p>Address: Dhaiya, Dhanbad 826004</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
