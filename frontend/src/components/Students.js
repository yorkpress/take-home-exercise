import React, { Component, useState } from 'react';
import { getStudents } from '../services/studentService';
import { HomeWork } from './HomeWork';

class Students extends Component {
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
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Grade</th>
                  <th>School ID</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.firstname + ' ' + student.lastname}</td>
                    <td>{student.email}</td>
                    <td>{student.grade}</td>
                    <td>{student.schoolId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <HomeWork onAssign={this.handlerAssignedHomework} />

        <footer class="pt-3 mt-4 text-muted border-top">&copy; 2021</footer>
      </div>
    );
  }
}

export default Students;
