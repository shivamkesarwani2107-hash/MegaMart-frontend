import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./frontend/home";
import Header from "./frontend/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;