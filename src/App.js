import "./App.css";
import {Link, Outlet} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Link to={"/n"}>Новый дизайн</Link>
        <Link to={"/o"}>Старый дизайн</Link>
    </div>
  );
}

export default App;
