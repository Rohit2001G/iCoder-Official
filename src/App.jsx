import React from 'react'
import "./App.css"
import "./Bootstrap.css"
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Home/Navigation"
import Body from './components/Home/body';
import Footer from './components/Home/Footer';
import AboutUs from './components/Nav/AboutUs';
import ContactUs from './components/Nav/ContactUs';
import HTMLTutorial from './components/Nav/HTMLTutorial';
import CSSTutorial from './components/Nav/CSSTutorial';
import JavascriptTutorial from './components/Nav/JavascriptTutorial';
import PHPTutorial from './components/Nav/PHPTutorial';
import Services from './components/Nav/Services';
import PrivacyPolicies from './components/Foot/PrivacyPolicies';
import TearmConditions from './components/Foot/TearmConditions';
import ScrollToTop from './components/ScrollTop';
import Security from './components/Home/Body/Security';
import Coding from './components/Home/Body/Coding';
import { Logic } from './components/Home/Body/Logic';
import { Design } from './components/Home/Body/Design';
import { SmartCoding } from './components/Home/Body/SmartCoding';
import { LookProblems } from './components/Home/Body/LookProblems';
import { Error } from './components/Error';









function App() {
  return (
    <>
    <BrowserRouter>

      <Navigation></Navigation>

    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/HTMLTutorial" element={<HTMLTutorial />} />
      <Route path="/CSSTutorial" element={<CSSTutorial />} />
      <Route path="/JavascriptTutorial" element={<JavascriptTutorial />} />
      <Route path="/PHPTutorial" element={<PHPTutorial />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/PrivacyPolicies" element={<PrivacyPolicies />} />
      <Route path="/TearmConditions" element={<TearmConditions />} />
      <Route path="/Security" element={<Security />} />
      <Route path="/Coding" element={<Coding/>} />
      <Route path="/Logic" element={<Logic/>} />
      <Route path="/Design" element={<Design/>} />
      <Route path="/SmartCoding" element={<SmartCoding/>} />
      <Route path="/LookProblems" element={<LookProblems/>} />
      <Route path="*" element={<Error/>} />


    </Routes>


      <Footer></Footer>

    </BrowserRouter>
     
     
    </>
  )
}

export default App
