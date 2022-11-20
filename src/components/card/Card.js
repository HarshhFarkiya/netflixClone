import "./Card.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
function Card(props) {
  const [video, seVideo] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/`;
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const fetchUrl = async () => {
    try {
      const response = await axios.get(`/movie/${props.id}`, {
        params: {
          append_to_response: "videos",
        },
      });
      if (response.data.videos.results.length > 0) {
        seVideo(response.data.videos.results[0].key);
      }
    } catch (e) {
      //console.log(e);
    }
  };
  useEffect(()=>{fetchUrl();},[])
  
  return (   
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!isHovered ? (
        <img className="card_poster" src={imageUrl} alt={props.title} />
      ) : (
        <iframe
        className="card_poster"
          style={{zIndex:'100000'}}
          src={`${youtubeUrl}${video}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
    </div>
  );
}
export default Card;
