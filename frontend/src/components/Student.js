import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

export class Student extends Component {
  render() {
    return (
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
            <tbody>{this.props.students.map(this.props.callbackfn)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

Student.propTypes = {
  students: PropTypes.any,
  callbackfn: PropTypes.func,
};
