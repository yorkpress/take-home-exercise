import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { getHomeworks } from '../services/homeworkService';
import { getStudents } from '../services/studentService';

export const HomeWork = (props) => {
  const [show, setShow] = useState(false);
  const [homeworks, setHomeWorks] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(async () => {
    // Update the document title using the browser API
    const { data } = await getHomeworks();

    const homeWorks = data.homeworks;
    setHomeWorks(homeWorks);
  }, {});

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Assign HomeWork
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
                  {homeworks.map((homework) => (
                    <tr key={homework.id}>
                      <td>{homework.name}</td>
                      <button
                        value="Assign"
                        className="btn btn-danger btn-sm"
                        onClick={() => props.onAssign(homework.name)}
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
