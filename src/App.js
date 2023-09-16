import "./App.css";
import Navbar from "./components/Navbar";
import Info from "./components/Section";
import Part2 from "./components/Part2";
import Discover from "./components/Discover";
import Join from "./components/Join";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      <Part2/>
      <Discover/>
      <Join/>
      <Footer/>
    </div>
  );
}
export default App;
