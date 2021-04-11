import React, { Component } from 'react';
import { getStudent } from '../services/studentService';

class StudentDetails extends Component {
  state = {
    student: {},
  };
  async componentDidMount() {
    const { student } = await getStudent(this.props.id);
    this.setState({ student });
  }

  render() {
    return <div>{this.state.student.name}</div>;
  }
}

export default StudentDetails;
