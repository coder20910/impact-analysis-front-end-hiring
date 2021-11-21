import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Homepage.css";

function Hompage(props) {
  const navigate = useNavigate();
  const [searchinput, setSearchInput] = useState("");


  let fileteredArr = props.candidateList; 

  const handleSearch = (ele) => {
    let task = ele.target.value;
    setSearchInput(task);
  };

  if (searchinput !== "") {
    let fileteredArrbySearch = fileteredArr.filter((candidateObj) => {
        let title = candidateObj.name.trim().toLowerCase();
        return title.includes(searchinput.trim().toLowerCase());
    });
    fileteredArr = fileteredArrbySearch;
  }

  const handleClick = (candidate) => {
    props.handleCurrentCandidate(candidate);
    navigate(`/:${candidate.id}`);
  };
  return (
    <div className="homeContainer">
      <div className="searchinputContainer">
        <input type="search" value={searchinput} onChange={handleSearch} />
      </div>
      {fileteredArr.map((candidate, index) => {
        return (
          <div
            className="cardContainer"
            key={index}
            onClick={() => handleClick(candidate)}
          >
            <div className="candidateCard">
              <img src={candidate.Image} alt={candidate.id + "image"} />
              <p>{candidate.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Hompage;
