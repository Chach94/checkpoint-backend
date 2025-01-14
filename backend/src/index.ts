import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


import db from "./db"
import CountryResolver from "./resolvers/country.resolver";
import { buildSchema } from "type-graphql";



async function main() {
    const schema = await buildSchema({
      resolvers: [CountryResolver],
    });
    const server = new ApolloServer<{}>({
      schema,
    });
  
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      context: async ({ req, res }) => {
        return {};
      },
    });
  
    await db.initialize();
  
    console.log(`🚀  Server ready at: ${url}`);
  }
  main();