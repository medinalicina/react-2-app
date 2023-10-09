import React, {useState} from "react";
import "./domaciSearch.css";

export default function Card() {
    const [data, detData]
    const [searchInput, setSearchInput] = useState("");
    

    const searchBar = () => {
        fetch(`https://dummyjson.com/products/search?q=phone${input}`);
        .then(res => res.json())
        .then(console.log);
        
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
     
      return(
        <div className="container">
            <input type="text" value={searchInput}
             onChange={handleChange}
             placeholder="Search"
    
             ></input> 
              <button onClick={searchBar}>Search</button>
      </div>
      )
 };

    