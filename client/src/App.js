import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FormTodo from "./views/FormTodo";
import UpdateForm from "./views/UpdateForm";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<FormTodo />} />
        <Route path="/edit" element={<UpdateForm />} />
      </Routes>
    </div>
  );
}
export default App;
