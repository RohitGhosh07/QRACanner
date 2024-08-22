import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QRCodePage from './pages/QRCodePage';
import QRScannerPage from './pages/QRScannerPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodePage />} />
        <Route path="/scanner" element={<QRScannerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
