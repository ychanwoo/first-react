import { useState, useEffect } from "react";
import App from "../App";
import Signup from "../Signup";
import Login from "../login";

function WooRouter() {
  const [url, setUrl] = useState(window.location.pathname); 
  console.log("render");

  useEffect(() => { 
    console.log("useEffect");
    const onPopstate = () => {
      setUrl(window.location.pathname);
    };
    window.addEventListener("popstate", onPopstate);

    return () => {
      console.log("useEffect cleanup");
      window.removeEventListener("popstate",onPopstate);
    };
  },[url]);

  console.log("after useEffect");

  if (url === "/signup") {
    return <Signup />;
  } else if (url === "/login") {
    return <Login />;
  } else {
    return <App />;
  }
}

export default WooRouter;