import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMutation, gql } from "@apollo/client";

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Container = styled.div`
  height: 400px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.imageUrl});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

const Movie = ({ id, imageUrl, isLiked }) => {
  const [toggleMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: Number(id), isLiked },
  });

  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster imageUrl={imageUrl} />
      </Link>
      <button onClick={toggleMovie}>{isLiked ? "Unlike" : "Like"}</button>
    </Container>
  );
};

export default Movie;
