import "./App.css";
import Header from "./components/Header"
import ServiceSection from "./pages/Services_Page";
import DesignLearningBanner from "./components/Design_Learning_Banner";
import InstructionalDesignBanner from "./components/Instructional_Design_Banner";

function App() {
  return (
    <div className="App">
        <Header/>
        <ServiceSection />
        <DesignLearningBanner/>
        <InstructionalDesignBanner/>
    </div>
  );
}

export default App;
