import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Nexus from "./pages/Nexus";
import Story from "./pages/Story";
import Brands from "./pages/Brands";
import Privacy from "./pages/Privacy";
import Invite from "./pages/Invite";

export default function App() {
  return (
    <Routes>
      {/* Standalone deeplink landing page — no navbar/footer. */}
      <Route path="invite" element={<Invite />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nexus" element={<Nexus />} />
        <Route path="story" element={<Story />} />
        <Route path="brands" element={<Brands />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
