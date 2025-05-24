import React , {useEffect, useState} from "react";
import imggg from "../../img/LoginPic.png";
import imgclose from "../../img/close.png";
import SignUp from "../userprofile/SIgnUp";
import { useNavigate } from "react-router-dom";

const LoginModal = ({onClose, onLogin}) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const [username, setUsername]  = useState("");
  const [password, setPass]  = useState("");
  const navigate = useNavigate ();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("/users.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json(); // throws error if not valid JSON
  })
  .then((data) => {
    const user = data.data.find((u) => u.username === username);
    if (!user) {
      alert("Username does not exist");
      return;
    }

    if (user.password !== password) {
      alert("Incorrect Password");
      return;
    }

    localStorage.setItem("LoggedIn", JSON.stringify(user));
    navigate("/home");
    alert("Logged In Successfully!");
  })
  .catch((err) => {
    console.error("Login error:", err.message);
    alert("Login failed. Please check the console.");
  });
    
  }
  

  return (
    <>
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
      <div className="flex bg-white rounded shadow-lg w-[50%] h-[70%] relative overflow-hidden">
        
        <div className="w-[40%] h-full">
          <img src={imggg} alt="Login Visual" className="object-cover w-full h-full"/>
        </div>
        <div className="w-[60%] bg-[#F9FFF0] px-8 pb-[110px] flex flex-col justify-center">
          <div className="flex justify-end mb-[60px]">
            <button onClick={onClose} className="w-10 text-[20px]"><img className="w-[80%]" src={imgclose} alt=" " /></button>
          </div>
          <h2 className="font-semibold poppins text-[32px] text-[#3D5300] mb-2">LOG IN</h2>
          <p className="font-normal poppins text-[16px] text-gray-600 mb-6">
            Please login to continue
          </p>

          <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
            <label className="text-sm text-[#3D5300] font-semibold mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-300 text-sm px-4 py-3 rounded-md mb-4 focus:outline-none"
            />

            <label className="text-sm text-[#3D5300] font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              className="bg-gray-300 text-sm px-4 py-3 rounded-md mb-2 focus:outline-none"
            />

            <a href="#" className="text-sm text-gray-600 hover:underline mb-6">
              Forgot Password?
            </a>

            <div className="flex items-center justify-between">
              <button type="submit" className="bg-[#3D5300] text-white font-semibold px-6 py-2 rounded-md">Log In</button>
              <button type="button" onClick={() => setShowSignUp(true)} >Create an Account?</button>
            </div>
          </form>

          
        </div>
      </div>
    </div>
    {showSignUp && <SignUp onClose={() => setShowSignUp(false)}/>}
    </>
  );
};

export default LoginModal;
