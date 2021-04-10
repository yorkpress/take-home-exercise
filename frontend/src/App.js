import logo from './logo.svg';
import './App.css';
import { Test } from './components/test';

function App() {
  return (
    <main>
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="fw-bold header align-items-center text-dark text-decoration-none"
          >
            <span class="header fs-4 fw-bold">About Your Assessment</span>
          </a>
        </header>

        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>

        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>

        <footer class="pt-3 mt-4 text-muted border-top">&copy; 2021</footer>
      </div>
    </main>
  );
}

export default App;
