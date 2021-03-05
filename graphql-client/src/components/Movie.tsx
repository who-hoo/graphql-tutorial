import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id }: { id: number }) => {
  return (
    <div>
      <Link to={`/${id}`}>{id}</Link>
    </div>
  );
};

export default Movie;
