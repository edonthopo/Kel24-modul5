import React from "react";

export default function Card({ title, followers, githubUrl }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Followers: {followers}</p>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
}
