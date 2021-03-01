const junghoo = {
  name: "Junghoo",
  age: 26,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => junghoo,
  },
};

export default resolvers;
