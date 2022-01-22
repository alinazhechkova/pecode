import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Characters } from "./pages/Characters";
import { Episodes } from "./pages/Episodes";
import { Locations } from "./pages/Locations/Locations";
import { Watch } from "./pages/WatchList";
import { Navbar } from "./components/Navbar";
import "./components/style.scss";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={"/"} exact component={Characters} />
          <Route path={"/episodes"} component={Episodes} />
          <Route path={"/locations"} component={Locations} />
          <Route path={"/watch"} component={Watch} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
