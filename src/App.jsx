import {Routes , Route}from "react-router"
import './App.css';
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import MuiTest from "./components/muiTest";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/muiTest" element={<MuiTest/>}/>
      </Routes>
    </div>
  );
}

export default App;
