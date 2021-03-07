import React from "react"
import UploadForm from "./comps/UploadForm"
import Head from "./comps/Head"
import Gallery from "./comps/Gallery"
import Home from "./comps/Home"
import { BrowserRouter as Router, Route,Switch} from "react-router-dom"
import "./scrollbar.css"
import MusicPlayer from "./comps/MusicPlayer";
import MusicUpload from "./comps/MusicUpload"

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
          </Route>
          <Route path="/Music">
            <MusicPlayer/>
          </Route>
          <Route path="/admin/music">
            <MusicUpload/>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
