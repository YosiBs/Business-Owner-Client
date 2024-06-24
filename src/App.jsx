import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import "./styles/header.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LoginBusinessDetails from "./pages/LoginBusinessDetails";
import CustomerList from "./pages/CustomerList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
