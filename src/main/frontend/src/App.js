import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
