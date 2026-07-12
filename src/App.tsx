import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { AdminMaterialStatusPage } from './pages/AdminMaterialStatusPage';
import { AdminPublishConfirmPage } from './pages/AdminPublishConfirmPage';
import { DownloadAiClassifyPage } from './pages/DownloadAiClassifyPage';
import { EditorHomePage } from './pages/EditorHomePage';
import { LocalLibraryPage } from './pages/LocalLibraryPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { UnavailableAssetsPage } from './pages/UnavailableAssetsPage';

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<EditorHomePage />} />
          <Route path="/unavailable-assets" element={<UnavailableAssetsPage />} />
          <Route
            path="/download-ai-classify"
            element={<DownloadAiClassifyPage />}
          />
          <Route path="/local-library" element={<LocalLibraryPage />} />
          <Route path="/important-assets" element={<PlaceholderPage title="重点素材页" />} />
          <Route path="/usage-history" element={<PlaceholderPage title="使用记录页" />} />
          <Route path="/settings" element={<PlaceholderPage title="设置页" />} />
          <Route
            path="/admin/material-status"
            element={<AdminMaterialStatusPage />}
          />
          <Route path="/admin/usage-data" element={<PlaceholderPage title="使用数据页" />} />
          <Route path="/admin/editor-management" element={<PlaceholderPage title="剪辑师管理页" />} />
          <Route path="/admin/settings" element={<PlaceholderPage title="系统设置页" />} />
          <Route path="/admin/logs" element={<PlaceholderPage title="操作日志页" />} />
          <Route
            path="/admin/publish-confirm"
            element={<AdminPublishConfirmPage />}
          />
          <Route path="*" element={<PlaceholderPage title="页面未找到" />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
