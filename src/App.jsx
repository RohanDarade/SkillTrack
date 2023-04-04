import { Route, Routes } from "react-router";
import "./App.css";
import Signup from "./components/Signup";

import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />

          </Routes>
      </AuthProvider>
      
    </div>
  );
}

export default App;
