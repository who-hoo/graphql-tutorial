let movies = [
  {
    id: 0,
    name: "Tom and Jerry",
    score: 1,
  },
  {
    id: 1,
    name: "The Croods: A New Age",
    score: 14,
  },
  {
    id: 2,
    name: "The Little Tings",
    score: 5,
  },
  {
    id: 3,
    name: "Wonder Woman 1984",
    score: 10,
  },
];

export const getMovies = () => movies;

export const getMovieById = (id: number) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const addMovie = (name: string, score: number) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id: number) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
