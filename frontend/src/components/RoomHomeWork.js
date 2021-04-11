import React, { Component } from 'react';
import { getStudents } from '../services/studentService';
import { HomeWork } from './HomeWork';
import { Student } from './Student';
import { Link } from 'react-router-dom';

class RoomHomeWork extends Component {
  state = {
    students: [],
    homework: null,
  };

  handlerAssignedHomework = (homework) => {
    this.setState({ homework });
  };
  async componentDidMount() {
    const { data } = await getStudents();
    this.setState({ students: data.students });
  }

  render() {
    return (
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/students"
            class="fw-bold header align-items-center text-dark text-decoration-none"
          >
            <span class="header fs-4 fw-bold">Class Room 1</span>
          </a>
        </header>

        {this.state.homework !== null ? (
          <h1>{this.state.homework}</h1>
        ) : (
          <p1>No homeworks specified for this room</p1>
        )}
        <Student
          students={this.state.students}
          callbackfn={(student) => (
            <tr key={student.id}>
              {/*<a href={'students/' + student.id}>*/}
              <td>
                <Link
                  to={{
                    pathname: `/students/${student.id}`,
                    state: { student },
                  }}
                >
                  {student.firstname + ' ' + student.lastname}
                </Link>
              </td>
              {/*</a>*/}
              <td>{student.email}</td>
              <td>{student.grade}</td>
              <td>{student.schoolId}</td>
            </tr>
          )}
        />
        <HomeWork onAssign={this.handlerAssignedHomework} />

        <footer class="pt-3 mt-4 text-muted border-top">&copy; 2021</footer>
      </div>
    );
  }
}

export default RoomHomeWork;
