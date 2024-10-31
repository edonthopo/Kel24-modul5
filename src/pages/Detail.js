// src/pages/Detail.js
import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";

export default function Detail() {
  const location = useLocation();
  const { title, img, description } = location.state; // Dapatkan data movie yang dikirim dari navigasi

  return (
    <div className="detail-container">
      <h1>{title}</h1>
      <img src={img} alt={title} className="detail-img" />
      <p className="detail-description">{description}</p>
    </div>
  );
}
