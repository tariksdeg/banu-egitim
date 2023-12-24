import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Users from "./pages/Users";
import Header from "./pages/Header";
function App() {
  return (
    <div className="container bg-light  ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
