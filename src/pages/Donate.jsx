import React from "react";

const amounts = [500, 1000, 2000, 5000, 7000, 10000];

const Donate = () => {
  const donate = (amt) => {
    // wire this to your payment gateway (Razorpay/UPI).
    alert(`Proceed to donate ₹${amt}. (Integrate payment gateway here)`);
  };

  return (
    <section className="container section">
      <h2>Food Relief Fund</h2>
      <p>Select an amount to donate:</p>
      <div className="donation-grid">
        {amounts.map(a => (
          <button key={a} className="donation-amt" onClick={() => donate(a)}>
            ₹{a}
          </button>
        ))}
      </div>
      <p className="muted">You can integrate Razorpay or UPI QR checkout here.</p>
    </section>
  );
};

export default Donate;
