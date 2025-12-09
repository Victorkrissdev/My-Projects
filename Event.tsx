import React from "react";

const Events: React.FC = () => {
  return (
    <section style={{ padding: "80px", textAlign: "center" }}>
      <h1>Upcoming Events</h1>
      <p>Join our weekly and special gatherings online and in person.</p>
      <button style={{
        backgroundColor: "#0d6efd",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px"
      }}>
        Learn More
      </button>
    </section>
  );
};

export default Events;
