// import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/createBlog" element={<CreateBlog/>}/>
      </Routes>
    </Router>
  )
}

export default App;
