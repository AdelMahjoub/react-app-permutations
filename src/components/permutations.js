import React from "react";

const Permutations = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-12">
        <p className="text-info">
          <code>Number of permutations: </code><strong>{props.permutations.length}</strong>
        </p>
      </div>
      <div className="col-xs-12 col-md-12">
        <pre>
            {
              props.permutations.map((permutation) => {
                return permutation
              })
            }
        </pre>
      </div>
    </div>
  )
}

export default Permutations;