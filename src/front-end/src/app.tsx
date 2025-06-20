import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from './layouts/Footer';

export function App() {
  return (
    <Router>
      <> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        
        <Footer /> {}
      </>
    </Router>
  );
}
