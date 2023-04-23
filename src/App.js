import "./App.css";
import ServiceSection from "./pages/Services_Page";
import Header from "./components/Header"
import DesignBanner from "./components/Design_Banner";

function App() {
  return (
    <div className="App">
        <Header/>
        <ServiceSection />
          <DesignBanner/>
    </div>
  );
}

export default App;
