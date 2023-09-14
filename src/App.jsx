import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeSettings } from "@/theme";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { setInitialCDAList } from "@/state";
import { useGetCDAListQuery } from "@/state/api"
import Layout from "@/scenes/layout";
import Dashboard from "@/scenes/dashboard";
import Inbox from "@/scenes/inbox";
import MyOffice from "@/scenes/my_office";
import MarketingCenter from "@/scenes/marketing_center";
import Events from "@/scenes/events";
import Admin from "@/scenes/admin";
import Performance from "@/scenes/performance";
import Users from "@/scenes/users";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const dispatch = useDispatch();
  const { data: cdaListData } = useGetCDAListQuery();

  useLayoutEffect(() => {
    if (cdaListData) {
      dispatch(setInitialCDAList(cdaListData));
    }
  }, [dispatch, cdaListData]);

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
              <Route path="/admin" element={<Admin />} />
              <Route path="/users" element={<Users />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
