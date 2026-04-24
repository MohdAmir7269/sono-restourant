import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Footer from "./Component/Footer";
import Reservation from "./pages/Reservation";
import ALaCarte from "./pages/ALaCarte";
import PrivateDining from "./pages/PrivateDining";
import Events from "./pages/Events";
import SonoSakuru from "./pages/SonoSakuru";
import GiftCard from "./pages/GiftCard";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reservation" element={<Reservation/>}/>
        <Route path="ALaCarte" element={<ALaCarte/>}/>
        <Route path="PrivateDining" element={<PrivateDining/>}/>
        <Route path="Events" element={<Events/>}/>
        <Route path="SonoSakuru" element={<SonoSakuru/>}/>
        <Route path="GiftCard" element={<GiftCard/>}/>
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
