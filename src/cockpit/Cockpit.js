import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth-context";
const Cockpit = (props) => {
  useEffect(() => {
    console.log("Cockpit.js useEffect");
    let timer = setTimeout(() => {
      console.log("setTimeout");
    }, 1000);
    return () => {
      //clearTimeout(timer);
      console.log("Cockpit cleanupwork : ", timer);
    };
  }, []);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log("Cockpit 2nd useEffect");

    return () => {
      console.log("Cockpit 2nd Clearing process useEffect");
    };
  });

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.togglebutton}> Toggle </button>

      {<button onClick={authContext.login}> Log in </button>}
    </div>
  );
};
export default React.memo(Cockpit);
