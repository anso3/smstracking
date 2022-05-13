import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Chart from "../components/Chart";
import { Row, Col, Container } from "react-bootstrap";

const client = new ApolloClient({
  uri: "api/graphql",
  cache: new InMemoryCache(),
});
export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Container fluid="md">
        <Row>
          <Col lg="8">
            <Chart />
          </Col>
        </Row>
      </Container>
    </ApolloProvider>
  );
}
