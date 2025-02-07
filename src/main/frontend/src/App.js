import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Write from "./pages/Write";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
