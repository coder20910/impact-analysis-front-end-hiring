import React from "react";
import { useNavigate } from "react-router-dom";

function Singlepage(props) {
  const navigate = useNavigate();
  const candidate = props.currentCandidate;
  const shortlistClick = () => {
    props.handleShortListed(candidate);
    navigate("/");
  };
  const rejectClick = () => {
      props.handleRejected(candidate);
      navigate("/");
  }
  return (
    <div className="current-candidate-container">
      <div className="details">
        <img src={candidate.Image} alt={candidate.id + "image"} />
        <p>{candidate.name}</p>
      </div>
      <div>
        <button onClick={shortlistClick}>Shortlist</button>
        <button onClick={rejectClick}>Reject</button>
      </div>
    </div>
  );
}

export default Singlepage;
