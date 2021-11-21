import React from "react";

function Rejected(props) {
  const rejected = props.rejectedArr;
  return (
    <div>
      {rejected.map((candidate, index) => {
        return (
          <div key={index}>
            <div>
              <img src={candidate.Image} alt={candidate.id + "image"} />
              <p>{candidate.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rejected;
