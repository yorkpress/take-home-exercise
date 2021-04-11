import React, { Component, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Book } from './Book';

class StudentDetails extends Component {
  state = {
    book: null,
  };
  handlerAssignedBook = (book) => {
    this.setState({ book });
  };
  render() {
    const { state } = this.props.location;
    const { firstname, lastname, avatar } = state.student;
    return (
      <main>
        <div class="container py-4">
          <header class="pb-3 mb-4 border-bottom">
            <span class="header fs-4 fw-bold">
              {firstname + ' ' + lastname}
            </span>
          </header>

          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              {this.state.book !== null ? (
                <h1>{this.state.book}</h1>
              ) : (
                <h1 class="display-5 fw-bold">
                  No Books specified for this student
                </h1>
              )}
              <img
                style={{ float: 'right' }}
                src={'/' + avatar}
                alt={'/default.png'}
              />

              <Book onAssign={this.handlerAssignedBook} />
            </div>
          </div>
          <Link class="btn-dark" to="/">
            <button>Back</button>
          </Link>
          <footer class="pt-3 mt-4 text-muted border-top">&copy; 2021</footer>
        </div>
      </main>
    );
  }
}

export default StudentDetails;
