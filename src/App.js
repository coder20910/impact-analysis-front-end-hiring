import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Hompage";
import ShortListed from "./components/Shortlisted/ShortListed";
import Rejected from "./components/Rejected/Rejected";
import Singlepage from "./components/ViewItem/Singlepage";

function App() {
  const [candidateList, setCandidateList] = useState([]);
  const [shortlistedArr, setShortListed] = useState([]);
  const [rejectedArr, setRejected] = useState([]);
  const [currentCandidate, setCurrentCandidate] = useState({});

  const handleShortListed = (candidate) => {
    let prevShortListed = shortlistedArr;
    prevShortListed.push(candidate);
    setShortListed(prevShortListed);
  };
  const handleRejected = (candidate) => {
    let prevRejected = rejectedArr;
    prevRejected.push(candidate);
    setRejected(prevRejected);
  };
  const handleCurrentCandidate = (candidate) => {
    setCurrentCandidate(candidate);
  };

  useEffect(() => {
    const url =
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setCandidateList(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/shortlisted"
          caseSensitive={false}
          element=""
          element={<ShortListed shortlistedArr={shortlistedArr}/>}
        />
        <Route path="/rejected" caseSensitive={false} element={<Rejected rejectedArr={rejectedArr}/>} />
        <Route
          path="/:id"
          caseSensitive={false}
          element={
            <Singlepage
              currentCandidate={currentCandidate}
              handleRejected={handleRejected}
              handleShortListed={handleShortListed}
            />
          }
        />
        <Route
          path="/"
          exact
          caseSensitive={false}
          element={
            <Homepage
              candidateList={candidateList}
              handleCurrentCandidate={handleCurrentCandidate}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
