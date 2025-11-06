import React from "react";

const Media = () => {
  // Put gallery images in src/assets/gallery-1.jpg etc
  const images = [
    "/src/assets/gallery-1.jpg",
    "/src/assets/gallery-2.jpg",
    "/src/assets/gallery-3.jpg"
  ];

  return (
    <section className="container section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((i, idx) => (
          <div key={idx} className="gallery-item">
            <img src={i} alt={`Gallery ${idx+1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
