import React, { Component } from "react";
// import logo from './logo.svg';
import "../App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../cockpit/Cockpit";
import AuthContext from "../context/auth-context";
const style = {
  marginTop: "100px",
};

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js Constructor:: ");
  }
  state = {
    persons: [
      {
        id: "1",
        name: "tarun",
        age: 32,
      },
      {
        id: "2",
        name: "Ashu",
        age: 25,
      },
      {
        id: "3",
        name: "Harish",
        age: 64,
      },
    ],
    showperson: false,
    showcockpit: true,
    authenticated: false,
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log("App.js getDerivedStateFromProps :: ", props);
  //   return state;
  // }
  componentDidUpdate() {
    console.log("App.js componentDidUpdate");
  }
  componentDidMount() {
    console.log("App.js componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("App.js shouldComponentUpdate");
    return true;
  }
  // componentWillMount() {
  //   console.log("App.js componentWillMount");
  // }

  togglebutton = () => {
    this.setState({
      showperson: !this.state.showperson,
    });
  };
  nameChangeHandler = (event, id) => {
    //alert("----");

    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons,
    });
  };

  deletePersonHandler = (index) => {
    //alert("----");
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons,
    });
  };

  // componentWillMount() {
  //   console.log("App.js   componentWillMount");
  // }

  loginHandler = () => {
    this.setState({ authenticated: !this.state.authenticated });
  };
  render() {
    console.log("App.js Render");
    let personss = null;
    if (this.state.showperson) {
      personss = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isauthenticated={this.state.authenticated}
        />
      );
    }
    return (
      <div className="App" style={style}>
        <button
          type="button"
          onClick={() =>
            this.setState({ showcockpit: !this.state.showcockpit })
          }
        >
          Toggle Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showcockpit ? (
            <Cockpit
              title={this.props.title}
              togglebutton={this.togglebutton}
              personsLength={this.state.persons.length}
              // login={this.loginHandler}
            />
          ) : null}
          <div>{personss}</div>
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
