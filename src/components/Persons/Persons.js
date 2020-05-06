import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("Persons getDerviedStateFromProps");
  //     return state;
  //   }

  // Commented as to use PureComponent

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("Persons ShouldCompoentnUpdate :: ");
  //     if (
  //       nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked
  //     ) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //     // return true;
  //}
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Persons.js ComponentDidUpdate");
    console.log(snapshot);
  }
  componentDidMount() {
    console.log("Persons.js componentDidMount");
  }
  componentWillUnmount() {
    console.log("Persons.js componentWillUnmount");
  }
  render() {
    console.log("Persons.js render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          deleteClick={() => this.props.clicked(index)}
          id={person.id}
          name={person.name}
          age={person.age}
          onchange={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;

// const Persons = (props) =>
//   props.persons.map((person, index) => {
//     return (
//       <Person
//         key={person.id}
//         deleteClick={() => props.clicked(index)}
//         id={person.id}
//         name={person.name}
//         age={person.age}
//         onchange={(event) => props.changed(event, person.id)}
//       />
//     );
//   });

// export default Persons;
