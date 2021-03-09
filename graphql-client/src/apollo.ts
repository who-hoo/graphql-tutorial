import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.modify({
          id: `Movie:${id}`,
          fields: {
            isLiked: (isLiked: boolean) => !isLiked,
          },
        });
      },
    },
  },
});
