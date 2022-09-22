import { Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import RegisterEmail from "./pages/Auth/RegisterEmail";
import Detail from "./pages/Board/Detail";
import TextEditor from "./pages/Board/TextEditor";
import ListSearch from "./pages/Board/ListSearch";
import Home from "./pages/Home";
import ModuleList from "./pages/Manage/ModuleList";
import ModuleDetail from "./pages/Manage/ModuleDetail";
import AccessList from "./pages/Manage/AccessList";
import AccessDeatil from "./pages/Manage/AccessDetail";
import AdminPage from "./pages/Manage/AdminPage";
import CallContent from "./pages/Board/Detail";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/register/email" element={<RegisterEmail />} />
        <Route path="/board/:id" element={<ListSearch />} />
        <Route path="/board/detail/:id" element={<CallContent />} />
        <Route path="/board/texteditor/:id" element={<TextEditor />} />
        <Route path="/manage" element={<AdminPage />} />
        <Route path="/manage/module" element={<ModuleList />} />
        <Route path="/manage/module/:id" element={<ModuleDetail />} />
        <Route path="/manage/access" element={<AccessList />} />
        <Route path="/manage/access/:id" element={<AccessDeatil />} />
      </Routes>
    </div>
  );
}
