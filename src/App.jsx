import React, { useMemo, useState } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeSettings } from "@/theme";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/scenes/layout";
import Dashboard from "@/scenes/dashboard";
import Inbox from "@/scenes/inbox";
import MyOffice from "@/scenes/my_office";
import MarketingCenter from "@/scenes/marketing_center";
import Events from "@/scenes/events";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/my-office" element={<MyOffice />} />
              <Route path="/marketing-center" element={<MarketingCenter />} />
              <Route path="/events" element={<Events />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
