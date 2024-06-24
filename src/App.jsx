import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import Header from "./components/Header";
import "./styles/header.css";
import Footer from "./components/Footer";
import "./styles/footer.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/UserSignUp";
import LoginBusinessDetails from "./pages/LoginBusinessDetails";
import CustomerList from "./pages/CustomerList";

function App() {
  //<Route path="/customerslist" element= {<CustomersList />}/>
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usersignup" element={<SignUp />} />
        <Route
          path="/LoginBusinessDetails"
          element={<LoginBusinessDetails />}
        />
        <Route path="/customerlist" element={<CustomerList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
