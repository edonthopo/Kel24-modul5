import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginScreen.css";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      // Fetch data dari API
      const response = await axios.get("https://reqres.in/api/users?page=2");
      const users = response.data.data;

      // Cari pengguna berdasarkan email dan nama depan sebagai password
      const apiUser = users.find((user) => user.email === email);

      if (apiUser && password === apiUser.first_name) {
        alert(`Login Berhasil! Selamat Datang ${apiUser.first_name}`);
        navigate("/movie"); // Navigate ke halaman Movie setelah login berhasil
      } else {
        alert("Login Gagal. Email atau Password Salah.");
      }
    } catch (error) {
      alert("Login Error: Terjadi kesalahan pada saat login.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Kelompok 24</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Masukkan Email Anda"
        className="login-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Masukkan Password Anda (Nama Depan)"
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
}
