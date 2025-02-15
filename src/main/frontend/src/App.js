import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import UseStateSample from "./pages/study/1UseStateSample";
import UseReducerSample from "./pages/study/2UseReducerSample";
import UseEffectSample from "./pages/study/3UseEffectSample";
import UseRefSample from "./pages/study/4UseRefSample";
import PropSample from "./pages/study/5PropSample";
import UseContextSample from "./pages/study/6UseContextSample";
import RecoilSample from "./pages/study/7RecoilSample";
import Test from "./pages/Test"
import Login from "./pages/Login";
import ChatPage from "./pages/ChatPage";
import RoomList from "./pages/testChat/RoomList";
import ChatRoom from "./pages/testChat/ChatRoom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/useStateSample" element={<UseStateSample />} />
        <Route path="/useReducerSample" element={<UseReducerSample />} />
        <Route path="/useEffectSample" element={<UseEffectSample />} />
        <Route path="/useRefSample" element={<UseRefSample/>} />
        <Route path="/propSample" element={<PropSample/>} />
        <Route path="/useContextSample" element={<UseContextSample/>} />
        <Route path="/recoilSample" element={<RecoilSample/>} />

        <Route path="/" element={<Test/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/chat" element={<ChatPage />} />
        
        
        <Route path="/roomList" element={<RoomList />} />
        <Route path="/chat/:roomId" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
