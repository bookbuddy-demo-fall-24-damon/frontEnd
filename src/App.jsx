import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import booklogo from './assets/books.png';
import Books from "./components/Books";
import Account from "./components/Account";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/me" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;