import { Box, Grid } from "@mui/material";
import DashboardBox from "@/components/DashboardBox";
import React from "react";
import Header from "@/components/Header";

const Performance = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="PERFORMANCE"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ marginTop: "40px !important" }}
      >
        <Grid item xs={12} sm={12} md={8}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={6}>
              <DashboardBox
                title="Top Agents"
                isSearchAvailable="false"
              ></DashboardBox>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <DashboardBox title="Months"></DashboardBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <DashboardBox title="Agents"></DashboardBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Performance;
