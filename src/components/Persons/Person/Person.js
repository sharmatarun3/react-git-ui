import React, { Component, Fragment } from "react";
import Auxilary from "../../../hoc/Auxilary";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";
const personstyle = {
  border: "solid 1px",
  width: "60%",
  textAlign: "center",
  padding: "16px",
};
class Person extends Component {
  static contextType = AuthContext;
  render() {
    console.log("Person Render()");
    return (
      <Fragment>
        {this.context.authenticated ? "Authenticated " : "Please login again"}

        {/* <Auxilary> */}
        {/* <div style={personstyle}> */}

        <p onClick={this.props.deleteClick}>
          My name is {this.props.name} and age is {this.props.age}
        </p>
        <p>Assignment</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.onchange}
        ></input>
        {/* </div> */}
        {/* // </Auxilary> */}
      </Fragment>
    );
  }
}

Person.propTypes = {
  deleteClick: PropTypes.func,
  onchange: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};
export default Person;

// const person = (props) => {
//     return (<div style={personstyle} >
//         <p onClick={props.deleteClick}>My name is {props.name} and age is {props.age}</p>
//         <p>Assignment</p>
//         <input type="text" value={props.name} onChange={props.onchange}></input>

//     </div>)

// }
// export default person;
