import "./App.css";
import { Typographics, Boxes } from "./Atoms";

function App() {
  return (
    <div className="App">
      <Boxes.Card w="20vw" h="20vh" aCenter clickable>
        <Typographics.Heading text="Hello" />
      </Boxes.Card>
    </div>
  );
}

export default App;
