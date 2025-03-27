import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="p-4 bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">NoteNest</h1>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/register" className="mr-4">Register</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
