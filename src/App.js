import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn.js";
import HomePage from "./pages/home.js";
// import axios from 'axios'
import SignUpPage from "./pages/SignUp.js";
import Timeline from "./pages/Timeline.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />}/>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
