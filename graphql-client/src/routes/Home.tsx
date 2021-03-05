import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES = gql`
  query {
    movies(limit: 10, rating: 9.0) {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Home</h1>
      {!loading &&
        !error &&
        data.movies &&
        data.movies.map((movie: { id: number }) => (
          <ul key={movie.id}>{movie.id}</ul>
        ))}
    </div>
  );
};

export default Home;
