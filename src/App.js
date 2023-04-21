import "./App.css";
import ServiceSection from "./pages/Services";
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
        <Header/>
      <div className={"container"}>
        <ServiceSection />
      </div>
    </div>
  );
}

export default App;
