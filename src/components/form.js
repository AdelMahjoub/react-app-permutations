import React from "react";

const Form = (props) => {
  return (
    <div className="row">
      <form action="#" onSubmit={props.handleSubmit} className="form-horizontal">
        <div className="form-group">
            <label className="col-md-2 hidden-xs control-label">Show permutations for:</label>
            <div className="col-md-7 col-xs-12">
                <input className="form-control" type="text" placeholder="Type in any string" autoFocus onChange={props.handleInput} value={props.term}/>
            </div>
            <div className="col-md-2 col-xs-12">
                <button className="btn btn-primary form-control" onClick={props.handleClick}>proceed</button>
            </div>
          </div>
      </form>
    </div>
  )
}

export default Form;