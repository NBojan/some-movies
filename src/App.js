import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";

function App() {
  return (
    <main className="containerBoot m-auto pTB-64">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies/:id" element={<SingleMovie />}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </main>
    
  );
}

export default App;
