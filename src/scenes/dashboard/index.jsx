import React from "react";
import { useGetUserQuery } from "@/state/api";
import { useSelector } from "react-redux";
import { Box, CardMedia, Grid, useTheme, Typography } from "@mui/material";
import BusinessCard from "@/components/BusinessCard";
import Properties from "@/components/Properties";
import PaidCap from "@/components/PaidCap";
import ClientMaps from "@/components/ClientMaps";
import DashboardBox from "@/components/DashboardBox";
import ClosedCDA from "@/components/ClosedCDA";
import Commission from "@/components/Commission";
import StatBox from "@/components/StatBox";
import { Email } from "@mui/icons-material";

const Dashboard = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  const theme = useTheme();

  useSelector((state) => console.log("STATE: ", state));
  console.log("🚀 ~ file: index.jsx:17 ~ Dashboard ~ data:", data);

  const propertiesData = [
    {
      title: "Apartment 1",
      headerName: "Phoenix, AZ",
    },
    {
      title: "Apartment 2",
      headerName: "Denver, CO",
    },
    {
      title: "Apartment 3",
      headerName: "Nashville, TN",
    },
    {
      title: "Apartment 4",
      headerName: "New York City, NY ",
    },
    {
      title: "Apartment 5",
      headerName: "Honolulu, HI",
    },
    {
      title: "Apartment 6",
      headerName: "Jackson, MS",
    },
    {
      title: "Apartment 1",
      headerName: "Phoenix, AZ",
    },
    {
      title: "Apartment 2",
      headerName: "Denver, CO",
    },
    {
      title: "Apartment 3",
      headerName: "Nashville, TN",
    },
    {
      title: "Apartment 4",
      headerName: "New York City, NY ",
    },
    {
      title: "Apartment 5",
      headerName: "Honolulu, HI",
    },
    {
      title: "Apartment 6",
      headerName: "Jackson, MS",
    },
    {
      title: "Apartment 7",
      headerName: "New York City, NY ",
    },
    {
      title: "Apartment 8",
      headerName: "Honolulu, HI",
    },
    {
      title: "Apartment 9",
      headerName: "Jackson, MS",
    },
  ];

  console.log("🚀 ~ file: index.jsx:10 ~ Dashboard ~ data:", data);

  return (
    <Box m="1.5rem 2.5rem">
      <BusinessCard user={data || {}} />
      <Box sx={{ mt: 1, mb: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6} sm={6} md={2}>
            <StatBox
              title="Listing"
              value={"1234"}
              increase="+14%"
              description="Since last month"
              icon={
                <Email
                  sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                />
              }
            />
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <StatBox
              title="Expiring"
              value={"1234"}
              increase="+14%"
              description="Since last month"
              icon={
                <Email
                  sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                />
              }
            />
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <StatBox
              title="MO Closing"
              value={"1234"}
              increase="+14%"
              description="Since last month"
              icon={
                <Email
                  sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                />
              }
            />
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <StatBox
              title="YTD Units"
              value={"1234"}
              increase="+14%"
              description="Since last month"
              icon={
                <Email
                  sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                />
              }
            />
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <StatBox
              title="YTD Volume"
              value={"1234"}
              increase="+14%"
              description="Since last month"
              icon={
                <Email
                  sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                />
              }
            />
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <StatBox
              title="Total Customers"
              value={"1234"}
              increase="+14%"
              description="Since last month"
              icon={
                <Email
                  sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                />
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 1, mb: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="Open Properties" title2="Sold Properties">
              <Properties propertiesData={propertiesData} />
            </DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="PAID CAP">
              <PaidCap />
            </DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="CLIENT MAPS">
              <ClientMaps />
            </DashboardBox>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", mt: 1, mb: 1 }}>
        <DashboardBox title="CLOSED CDA">
          <ClosedCDA />
        </DashboardBox>
      </Box>

      <Box sx={{ mt: 1, mb: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="COMMISSION">
              <Commission />
            </DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="OFFICES"></DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="LICENSES"></DashboardBox>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 1, mb: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="MLS BOARD"></DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="TAX FORMS">
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://placehold.co/600x400"
                alt=""
              />
            </DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="CONTRACT">
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://placehold.co/600x400"
                alt=""
              />
            </DashboardBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
