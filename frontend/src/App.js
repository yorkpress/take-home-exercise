import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {DashboardPage,ClassroomPage,StudentPage,CreateAssignmentPage} from './Pages';

 export default class App extends Component {
   
  constructor(props){
    super(props);
  }
  
  render(){
  return (
    <Router>
      <div>
      
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/student/:studentId">
            <StudentPage />
          </Route>
          <Route path="/classroom">
            <ClassroomPage />
          </Route>
          <Route path="/createAssignment">
            <CreateAssignmentPage />
          </Route>
          <Route path="/">
            <DashboardPage />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

