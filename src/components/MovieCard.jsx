import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return(
  <div className="w-40 pr-4 transform hover:scale-110 transition duration-300">
    <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
  </div>
  );
};
 

export default MovieCard;
