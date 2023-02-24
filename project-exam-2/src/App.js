import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashboardPage from "./components/dashboard/DashboardPage";
import LoginPage from "./components/login/LoginPage";
import ProfilePage from "./components/profile/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
