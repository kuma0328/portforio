import { Route, Routes } from "react-router-dom";
import {
  Home,
  Self,
  Skills,
  Learning,
  Contact,
  Navbar,
  Title,
  PrivacyPolicy,
} from "./components/index";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Title />
        <Navbar />
        <div className="flex justify-center items-center w-screen h-screen">
          <div className="w-11/12 h-5/6 md:w-9/12">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about_me" element={<Self />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/learn_more" element={<Learning />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
