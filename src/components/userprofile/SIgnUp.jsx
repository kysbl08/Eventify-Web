import React, {  useState } from "react";
import imggg from "../../img/LoginPic.png";
import imgBack from "../../img/back.png";
import { useNavigate } from "react-router-dom";

const SIgnUp= ({onClose}) => {

  const [fName, setfName]  = useState("");
  const [lName, setlName]  = useState("");
  const [username, setusername]  = useState("");
  const [wrongPass, setwrongPass] = useState("");
  const navigate = useNavigate();

  const [passwords, setPasswords] = useState(
    {
      pass: "",
      confirmPass: "",
    }
  );

  const handleChange = (e) => {
    setPasswords(previous => (
      {...previous, [e.target.name]: e.target.value}
    ))
    if (e.target.name === "confirmPass"){
      if (e.target.value !== passwords.pass){
        setwrongPass("Password do not match!");
      }
      else {
        setwrongPass("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("/users.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json(); 
  })
  .then((data) => {
    const user = data.data.find((u) => u.username === username);

    localStorage.setItem("LoggedIn", JSON.stringify(user));
    navigate("/home");
    alert("Account Created Successfully");
  })
  .catch((err) => {
    console.error("Login error:", err.message);
    alert("Login failed. Please check the console.");
  });
    
  }

    return (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="flex bg-white rounded shadow-lg w-[50%] h-[90%] relative overflow-hidden">
             <div className="w-[40%] h-full">
              <img src={imggg} alt="" className="object-cover w-full h-full"/>
            </div> 
            <div className="w-full h-full bg-[#F9FFF0] p-10 overflow-y-auto">
                <div className="flex justify-start mb-[60px]">
                    <button onClick={onClose} className="w-10 text-[20px]"><img className="w-[80%]" src={imgBack}/></button>
                </div>
              <h2 className="text-3xl font-bold text-[#3D5300] mb-8">SIGN UP</h2>
              <form onSubmit={handleSubmit}>
              <div className="flex gap-4 mb-6">
                <div className="flex flex-col w-1/2">
                  <label className="text-sm text-[#3D5300] mb-1">First name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={fName}
                    onChange={(e) => setfName(e.target.value)}
                    className="bg-gray-300 px-4 py-2 rounded focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="text-sm text-[#3D5300] mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lName}
                    onChange={(e) => setlName(e.target.value)}
                    className="bg-gray-300 px-4 py-2 rounded focus:outline-none"
                  />
                </div>
              </div>
    
              {/* Birthday */}
              <div className="mb-6">
                <label className="text-sm text-[#3D5300] mb-1 block">Birthday</label>
                <div className="flex gap-4">
                  <select className="bg-gray-300 px-4 py-2 rounded w-1/3 focus:outline-none">
                    <option>Month</option>
                  </select>
                  <select className="bg-gray-300 px-4 py-2 rounded w-1/3 focus:outline-none">
                    <option>Day</option>
                  </select>
                  <select className="bg-gray-300 px-4 py-2 rounded w-1/3 focus:outline-none">
                    <option>Year</option>
                  </select>
                </div>
              </div>
    
              {/* Gender */}
              <div className="mb-6">
                <label className="text-sm text-[#3D5300] mb-1 block">Gender</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" />
                    <span>Female</span>
                  </label>
                </div>
              </div>
    
              {/* Username */}
              <div className="flex flex-col w-full">
                  <label className="text-sm text-[#3D5300] mb-1">Username</label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    className="bg-gray-300 px-4 py-2 rounded focus:outline-none"
                  />
                </div>

              {/* Password */}
              <div className="mb-4">
                <label className="text-sm text-[#3D5300] mb-1 block">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="pass"
                  value={passwords.pass}
                  onChange={handleChange}
                  className="bg-gray-300 px-4 py-2 rounded w-full focus:outline-none"
                />
              </div>
    
              {/* Confirm Password */}
              <div className="mb-6">
                <label className="text-sm text-[#3D5300] mb-1 block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPass"
                  value={passwords.confirmPass}
                  onChange={handleChange}
                  className="bg-gray-300 px-4 py-2 rounded w-full focus:outline-none"
                />
                {wrongPass && (<p className="text-red">{wrongPass}</p>)}
              </div>
    
              {/* Submit Button */}
              <button className="bg-[#3D5300] text-white font-semibold px-6 py-2 rounded-md mx-auto block">
                Sign Up
              </button>
              </form>
            </div>
          </div>
        </div>
      );
};

export default SIgnUp;
