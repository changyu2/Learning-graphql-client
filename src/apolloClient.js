import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql-iypbofqlug.now.sh/"
});

export default client;
