import React from "react"
import UploadForm from "./comps/UploadForm"
import Head from "./comps/Head"
import Gallery from "./comps/Gallery"
import Home from "./comps/Home"
import { BrowserRouter as Router, Route,Switch} from "react-router-dom"
import "./scrollbar.css"

function App() {
  return (
    <div className="App">
      <Router>
      <Head />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/photography">
            <Gallery />
          </Route>
          <Route path="/admin/photography">
            <UploadForm/>
            <Gallery />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
