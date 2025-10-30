import React from "react";
import { FaStar } from "react-icons/fa";

export default function Text({ title = "Start Framework", color = "#ffffff" }) {
  return (
    <div className="text pt-5 text-center">
      <h1 className="title text-uppercase fw-bold" style={{ color: color }}>
        {title}
      </h1>

      <div className="star d-flex justify-content-center align-items-center gap-3 mt-3">
        <div className="line" style={{ backgroundColor: color }}></div>
        <FaStar size={20} color={color} />
        <div className="line" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
}
