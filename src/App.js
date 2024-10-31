// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup, MdGames, MdBook } from "react-icons/md";
import "./App.css";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import Game from "./pages/Game";
import Book from "./pages/Book";
import Detail from "./pages/Detail";
import LoginScreen from "./pages/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 24</p>
      </header>
      <Routes>
        <Route path="/" element={<LoginScreen />} />{" "}
        {/* Halaman login sebagai root */}
        <Route path="/movie" element={<Movie />} /> {/* Halaman movie */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/book" element={<Book />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
        <NavLink to="/game" className="iconWrapper">
          <MdGames className="icon" /> Game
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <MdBook className="icon" /> Book
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
