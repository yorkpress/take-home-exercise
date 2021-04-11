import './App.css';
import NavBar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Room from './components/Room';
function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/students" component={Room} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
