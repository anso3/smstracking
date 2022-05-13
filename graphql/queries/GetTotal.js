import { gql } from "@apollo/client";

const GET_TOTAL = gql`
  query {
    getTotal {
      _id {
        category
      }
      amount
    }
  }
`;
export default GET_TOTAL;
