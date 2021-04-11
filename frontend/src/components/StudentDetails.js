import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const StudentDetails = (_) => {
  const { state } = useLocation();

  return (
    <div>
      <Form>
        <div>
          <div>
            <strong>Id:</strong> {state.student.id}{' '}
          </div>
          <div>
            <strong>Name:</strong> {state.student.name}{' '}
          </div>
        </div>
      </Form>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default StudentDetails;
