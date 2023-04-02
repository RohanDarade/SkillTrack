import {Routes , Route}from "react-router"
import './App.css';
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import MuiTest from "./muiTest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/muiTest" element={<MuiTest/>}/>
      </Routes>
    </div>
  );
}

export default App;
