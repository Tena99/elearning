import "./App.css";
import Header from "./components/Header"
import ServiceSection from "./pages/Services_Page";
import DesignLearningBanner from "./components/Design_Learning_Banner";
import InstructionalDesignBanner from "./components/Instructional_Design_Banner";
import LeadForm from "./components/Lead_Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <ServiceSection />
        <DesignLearningBanner/>
        <InstructionalDesignBanner/>
        <LeadForm/>
        <Footer/>
    </div>
  );
}

export default App;
