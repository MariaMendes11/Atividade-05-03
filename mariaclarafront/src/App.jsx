import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostEvento from "./pages/postEventos";
import Eventos from "./pages/Eventos";
import Ingressos from "./pages/Ingressos";
import Org from "./pages/Org";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/evento" element={<PostEvento />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/ingresso" element={<Ingressos />} />
          <Route path="/org" element={<Org />} />
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;