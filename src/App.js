import "./App.css";
import "./scss/main.scss";
import Home from "./components/Home";
import Whatwedo from "./components/Whatwedo";
import Workingproc from "./components/Workingproc";
import OurProject from "./components/Ourproject";
import Client from "./components/Client";
import Different from "./components/Different";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Whatwedo />
      <Workingproc />
      <OurProject />
      <Client />
      <Different />
      <Footer />
    </div>
  );
}

export default App;
