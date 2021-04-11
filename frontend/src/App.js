import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RoomHomeWork from './components/RoomHomeWork';
import StudentDetails from './components/StudentDetails';
function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/students" component={RoomHomeWork} />
            <Route exact path="/students/:id" component={StudentDetails} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
