import './App.css';
import Students from './components/Students';
import NavBar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/students" component={Students} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
