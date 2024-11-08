import Home from "./pages/Home";
import Whatwedo from "./pages/Whatwedo";
import Workingproc from "./pages/Workingproc";
import OurProject from "./pages/Ourproject";
import Client from "./pages/Client";
import Different from "./pages/Different";
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
