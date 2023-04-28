import "./App.css";
import {Link} from "react-router-dom";



function App() {
  return (
    <div className="App">



        <div className={"design_choice"}>
            <h1>Greetings!</h1>
            <p>We recently changed the design and would like you to check it out. Otherwise you can always return to the old version of the site. Thank you!</p>

        <Link to={"/n"}>New Design</Link>
        <Link to={"/o"}>Old Design</Link>
        </div>
    </div>
  );
}

export default App;
