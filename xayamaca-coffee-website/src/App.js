import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="contact" element={<ContactPage />} />
        <Route path="/" />
        <Route path="products" />
        <Route path="about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
