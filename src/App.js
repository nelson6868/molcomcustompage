
import './App.css';
import Footer from './Component/Footer';
import Section from './Component/Section';
import User from './Component/User';
import Navigaton from './Component/Navbar';
import Subscrib from './Component/Subscrib'
import Features from './Component/Features';
import Plane  from './Component/plane'
import PlaneCategories from './Component/PlaneCategories'


function App() {
  return (
    <div className="App">
      <Navigaton/>
      <Section/>
      <User/>
      <Features/>
      <Plane/>
      <PlaneCategories/>
      <Subscrib/>
     <Footer/>
    </div>
  );
}

export default App;
