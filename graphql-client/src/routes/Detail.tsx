import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

const Detail = () => {
  const { id }: { id: string } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: Number(id) },
  });

  return (
    <div style={{ textAlign: "center" }}>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error :(</h1>}
      {!loading && !error && data && data.movie && <h1>{data.movie.title}</h1>}
    </div>
  );
};

export default Detail;
