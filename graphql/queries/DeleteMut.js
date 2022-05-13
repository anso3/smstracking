import { gql } from "@apollo/client";

const DELETE_MUT = gql`
  mutation deleteExpense($id: ID!) {
    deleteExpense(id: $id) {
      acknowledged
      deletedCount
    }
  }
`;

export default DELETE_MUT;
