import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import Detail from "./pages/detail";
import Second from "./pages/second";
import Map from "./pages/map";
import NotFound from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<Detail />} />
        <Route path="/second" element={<Second />} />
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
