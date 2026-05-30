import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NexusInvite from "./pages/NexusInvite";
import Privacy from "./pages/Privacy";
import PublicNexusSummary from "./pages/PublicNexusSummary";
import PublicRunShare from "./pages/PublicRunShare";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import Invite from "./pages/Invite";

export default function App() {
  return (
    <Routes>
      {/* Standalone deeplink landing page — no navbar/footer. */}
      <Route path="invite" element={<Invite />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="invite/:inviteId" element={<NexusInvite />} />
        <Route path="run/:runId" element={<PublicRunShare />} />
        <Route path="nexus/:nexusId" element={<PublicNexusSummary />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="support" element={<Support />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
