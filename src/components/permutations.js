import React from "react";
import Permutation from "./permutation"

const Permutations = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-12">
        <p className="text-info">
          <code>Number of permutations: </code><strong>{props.permutations.length}</strong>
        </p>
      </div>
      <div className="col-xs-12 col-md-12">
        <table className="table table-striped">
          <tbody>
            {
              props.permutations.map((permutation, i) => {
                return <Permutation key={`permutation-${i}`} permutation={permutation}/> 
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Permutations;