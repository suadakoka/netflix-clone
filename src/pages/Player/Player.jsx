import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

// const Player = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [apiData, setApiData] = useState({
  //   name: "",
  //   key: "",
  //   published_at: "",
  //   typeof: "",
  // });
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGQ2MWU2M2I0OWUxZTU3YzZiYzczMjI2MDIyNDQyYSIsInN1YiI6IjY2NjliYmJjYTAwNGUwY2RlM2E2ZDVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZBExAhwX0lzCn_UP2eF2MJWhoShc7SIyHjtyrmkfg-A",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/653346/videos?language=en-US",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setApiData(res.results);
      })
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/${id}/videos?language=en-US",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setApiData(response.results[0]))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={"https://www.youtube.com/embed/${apiData.key}"}
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        {/* {(apiData ?? []).map((card, index) => {
          return (
            <>
              <p>{card.published_at.slice(0, 10)}</p>
              <p>{card?.name}</p>
            </>
          );
        })} */}
        {/* <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p> */}
      </div>
    </div>
  );
};
// };
export default Player;
