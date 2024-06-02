import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Models from "./components/Models";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Instagram from "./components/Instagram";
import Connect from "./components/Connect";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/DitzyRecruit/models">
            <Models />
          </Route>
          <Route path="/DitzyRecruit/about">
            <About />
          </Route>
          <Route path="/DitzyRecruit/contact">
            <Contact />
          </Route>
          <Route path="/DitzyRecruit/blog">
            <Blog />
          </Route>
          <Route path="/DitzyRecruit/instagram">
            <Instagram />
          </Route>
          <Route path="/DitzyRecruit/connect">
            <Connect />
          </Route>
          <Route path="/DitzyRecruit/">
            <Home />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
