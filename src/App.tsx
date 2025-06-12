import "./App.css";
import ContextProvider from "./Context/ContentProvider.js";
import { Route } from "wouter";

import Landing from "./components/layout/Landing.js";
import Home from "./components/layout/Home/Home.js";

function App() {
  return (
    <ContextProvider>
      <div className="flex w-full h-screen">
        <Route path="/home/:component">
          <Home />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </div>
    </ContextProvider>
  );
}

export default App;
