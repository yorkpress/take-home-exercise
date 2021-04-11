import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { getBooks } from '../services/bookService';

export const Book = (props) => {
  const [show, setShow] = useState(false);
  const [books, setBooks] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(async () => {
    const { data } = await getBooks();

    const homeWorks = data.books;
    setBooks(homeWorks);
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Assign Book
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Books</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Assign</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr key={book.id}>
                      <td>{book.name}</td>
                      <button
                        value="Assign"
                        className="btn btn-danger btn-sm"
                        onClick={() => props.onAssign(book.name)}
                      >
                        Assign
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
