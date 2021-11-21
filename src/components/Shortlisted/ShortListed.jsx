import React from "react";

function ShortListed(props) {
  let shortlistedArr = props.shortlistedArr;
  return (
    <div>
      {shortlistedArr.map((candidate, index) => {
        return (
          <div key={index}>
            <div >
              <img src={candidate.Image} alt={candidate.id + "image"} />
              <p>{candidate.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShortListed;
