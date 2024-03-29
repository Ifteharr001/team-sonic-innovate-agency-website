import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  Feedbacks,
  Hero, StarsCanvas,
  Navbar,
  Counter,
  
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <div className="w-[1140px] mx-auto">
            <Counter />
          </div>
        </div>
        
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
