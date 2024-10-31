// src/pages/Movie.js
import { Fragment } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const navigate = useNavigate(); // Gunakan navigate untuk routing

  const poster = [
    {
      title: "John Wick",
      id: 1,
      rate: 4,
      genre: "action, crime",
      description:
        "John Wick is an ex-hitman seeking vengeance for the killing of his dog...",
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
    },
    {
      title: "teletubis",
      id: 2,
      rate: 4,
      genre: "fun, crime",
      description:
        "Teletubis is a show featuring colorful creatures living in a beautiful landscape...",
      img: "https://cdn0-production-images-kly.akamaized.net/KtF7UWI4oqMpMy8Rur_2Ts1xBJI=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4150481/original/071110700_1662583955-IMG_20220907_234722.jpg",
    },
    {
      title: "Tayo",
      id: 3,
      rate: 4,
      genre: "fun, kids",
      description:
        "Tayo is a cheerful little bus that loves to explore and help his friends.",
      img: "https://i.ytimg.com/vi/ELSwI7qpwl4/maxresdefault.jpg",
    },
  ];

  const data = [
    {
      title: "Oppenheimer",
      id: 4,
      rate: 4,
      genre: "biography, drama, history",
      description:
        "A look at the life of J. Robert Oppenheimer, the physicist who helped develop the atomic bomb...",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
      title: "Teletubis",
      id: 5,
      rate: 4,
      genre: "fun, crime",
      description:
        "Teletubis is a show featuring colorful creatures living in a beautiful landscape...",
      img: "https://cdn0-production-images-kly.akamaized.net/KtF7UWI4oqMpMy8Rur_2Ts1xBJI=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4150481/original/071110700_1662583955-IMG_20220907_234722.jpg",
    },
    {
      title: "Tayo",
      id: 6,
      rate: 4,
      genre: "fun, kids",
      description:
        "Tayo is a cheerful little bus that loves to explore and help his friends.",
      img: "https://i.ytimg.com/vi/ELSwI7qpwl4/maxresdefault.jpg",
    },
  ];

  const handleMovieClick = (movie) => {
    navigate("/detail", { state: movie }); // Navigate to Detail with movie data
  };

  return (
    <>
      <p id="movies">Top Movies</p>
      <div className="containerTop">
        {poster.map((item) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
              onClick={() => handleMovieClick(item)} // Navigasi ke halaman Detail
            />
          </Fragment>
        ))}
      </div>

      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Movies</p>
          {data.map((item) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => handleMovieClick(item)} // Navigasi ke halaman Detail
              />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
