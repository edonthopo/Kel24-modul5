import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usernames = ["Kemphy", "edonthopo", "zekaemo"];
        const responses = await Promise.all(
          usernames.map((username) =>
            axios.get(`https://api.github.com/users/${username}`)
          )
        );
        const users = responses.map((response) => response.data);
        setUsers(users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h1>Kelompok 24</h1>
      <div className="profile-grid">
        {users.map((user, index) => (
          <div key={index} className="profile-card">
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              className="profile-avatar"
            />
            <h2>Nama: {user.login}</h2>
            <p>Pengikut: {user.followers}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              Profil GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
