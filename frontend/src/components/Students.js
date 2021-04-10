import React, { Component } from 'react';

class Students extends Component {
  state = {
    students: this.getStudents(),
  };

  getStudents() {
    return '';
  }
  render() {
    return <div></div>;
  }
}

export default Students;
