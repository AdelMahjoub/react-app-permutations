import React from "react";

const sizeOfObject = (obj) => {
  let size = 0;
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
}

const Permutations = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-12">
        <p className="text-info">
          <code>Number of permutations: </code>
          <strong>{sizeOfObject(props.permutations)}</strong>
        </p>
      </div>
      <div className="col-xs-12 col-md-12">
        <pre>
           {
             JSON.stringify(props.permutations, null, 2)
           }
        </pre>
      </div>
    </div>
  )
}

export default Permutations;