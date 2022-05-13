import Table from "react-bootstrap/Table";
import { useState, useRef } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Modal, Button, Form } from "react-bootstrap";
import GET_EXPENSES from "../graphql/queries/GetExpenses";
import DELETE_MUT from "../graphql/queries/DeleteMut";
import NEW_EXPENSE from "../graphql/queries/NewExpense";

const CrudTable = () => {
  const { loading, error, data } = useQuery(GET_EXPENSES, {
    pollInterval: 2500,
  });
  const [deleteMut] = useMutation(DELETE_MUT);
  const [addExpense] = useMutation(NEW_EXPENSE);
  const categoryRef = useRef();
  const amountRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = parseInt(amountRef.current.value);
    const category = categoryRef.current.value.toUpperCase();
    addExpense({
      variables: {
        category,
        amount,
      },
      refetchQueries: [{ query: GET_EXPENSES }],
    });
    categoryRef.current.value = "";
    amountRef.current.value = "";
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Expense
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category </Form.Label>
                <Form.Control
                  ref={categoryRef}
                  required
                  type="input"
                  placeholder="Category"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="amount">
                <Form.Label>Amount </Form.Label>
                <Form.Control
                  required
                  ref={amountRef}
                  type="input"
                  placeholder="$$$$"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Expense</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.getExpenses.map((e, i) => {
            return (
              <tr key={e.id + i}>
                <td> {new Date(parseInt(e.date)).toString()}</td>
                <td> {e.category}</td>
                <td>{e.amount}</td>
                <td>
                  <button
                    onClick={() =>
                      deleteMut({
                        variables: {
                          id: e.id,
                        },
                        refetchQueries: [{ query: GET_EXPENSES }],
                      })
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CrudTable;
