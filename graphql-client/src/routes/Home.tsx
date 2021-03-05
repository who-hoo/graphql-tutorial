import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 15px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Error = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

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

  return (
    <Container>
      <Header>
        <Title>Movies</Title>
        <Subtitle>My First GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {error && <Error>Error :(</Error>}
      {!loading &&
        !error &&
        data.movies &&
        data.movies.map((movie: { id: number }) => (
          <Movie key={movie.id} id={movie.id} />
        ))}
    </Container>
  );
};

export default Home;
