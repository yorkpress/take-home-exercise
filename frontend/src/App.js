import { DashboradPage, ClassRoomPage } from "Pages";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/classroom">
          <ClassRoomPage />
        </Route>
        <Route path="/">
          <DashboradPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
