import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import MuiTest from "./muiTest";
import Dashboard from "./Dashboard";
import { AuthProvider } from "./Auth";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/muiTest" element={<MuiTest />} />
          </Routes>
      </AuthProvider>
      
    </div>
  );
}

export default App;
