import {Routes , Route}from "react-router"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
