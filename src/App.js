import "./App.css";
import Cities from "./components/Cities";
import Welcome from "./components/Welcome";
import City from "./components/City";
import NavBar from "./components/NavBar";
import { BrowserRouter,  Route } from "react-router-dom";
require("dotenv").config();

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL,"backend url");
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/cities" component={Cities} />
        <Route exact path="/city/:id" component={City} />
      </BrowserRouter>
    </div>
  );
}

export default App;
