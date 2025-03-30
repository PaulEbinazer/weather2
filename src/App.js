import React from "react";
import "./App.css";
import { IoIosSearch } from "react-icons/io";



const App = () => {
  return (
    <div className="container">
      {/* body */}

      <div className="body">
        <div className="searchbar">
          <input type="text" placeholder="Enter the city name" />
          <IoIosSearch className="i-1" />
        </div>

        {/* content */}

        <div className="imgcontent">
          <img src="./sun.png" alt="" />
          <h1>Aruppukkottai</h1>
          <h1>31 C</h1>
        </div>

        
      </div>
    </div>
  );
};

export default App;
