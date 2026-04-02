import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../AppLayout";
import LivePage from "../../pages/LivePage";
import LoginPage from "../../pages/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage";
import SettingsPage from "../../pages/SettingsPage";
import VodJobPage from "../../pages/VodJobPage";
import VodPage from "../../pages/VodPage";
import VodPipelinePage from "../../pages/VodPipelinePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route path="/vod" element={<VodPage />} />
          <Route path="/vod/:pipelineId" element={<VodPipelinePage />} />
          <Route path="/vod/:pipelineId/:jobId" element={<VodJobPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
