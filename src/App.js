
import './App.css';
import Footer from './Component/Footer';
import Section from './Component/Section';
import User from './Component/User';
import Navbar from './Component/Navbar';
import Subscrib from './Component/Subscrib'
import Features from './Component/Features';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section/>
      <User/>
      <Features/>
      <Subscrib/>
     <Footer/>
    </div>
  );
}

export default App;
