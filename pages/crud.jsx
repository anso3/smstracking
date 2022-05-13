import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import CrudTable from "../components/Table";

const client = new ApolloClient({
  uri: "api/graphql",
  cache: new InMemoryCache(),
});
export default function Crud() {
  return (
    <ApolloProvider client={client}>
      <div>
        <CrudTable />
      </div>
    </ApolloProvider>
  );
}
