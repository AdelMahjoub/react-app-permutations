import React from "react";

const ProcessIndicator = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-12">
        <hr />
      </div>
      <div>
          <p className="col-xs-6 col-md-2">Processing ...</p>
          <button className="btn btn-danger col-xs-6 col-md-2" onClick={props.handleStop}>Stop</button>
      </div>
      <div className="col-xs-12 col-md-12">
        <hr />
      </div>
    </div>
  )
}

export default ProcessIndicator;