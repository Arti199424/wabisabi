import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Workshops from "./components/Workshops";
import About from "./components/About";
import Mainimg from "./components/Mainimg";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Mainimg />
        <Workshops />
        <About/>
        <Footer/>
        
      </div>
    </>
  );
}

export default App;
