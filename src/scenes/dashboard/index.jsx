import React from "react";
import { useGetUserQuery } from "@/state/api";
import { useSelector } from "react-redux";
import { Box, CardMedia, Grid } from '@mui/material';
import BusinessCard from "@/components/BusinessCard";
import SoldProperties from '@/components/SoldProperties';
import PaidCap from '@/components/PaidCap';
import ClientMaps from '@/components/ClientMaps';
import DashboardBox from '@/components/DashboardBox';
import ClosedCDA from '@/components/ClosedCDA';
import Commission from '@/components/Commission';


const Dashboard = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  console.log("🚀 ~ file: index.jsx:10 ~ Dashboard ~ data:", data);

  return (
    <>
      <BusinessCard user={data || {}} />

      <Box sx={{ mt: 1, mb: 1 }} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          <Grid item xs={2} sm={4} md={4} >
            <DashboardBox title='SOLD PROPERTIES' >
              <SoldProperties />
            </DashboardBox  >
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <DashboardBox title='PAID CAP'>
              <PaidCap />
            </DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <DashboardBox title='CLIENT MAPS' >
              <ClientMaps />
            </DashboardBox>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', mt: 1, mb: 1 }} >
        <DashboardBox title='CLOSED CDA'>
          <ClosedCDA />
        </DashboardBox>
      </Box>

      <Box sx={{ mt: 1, mb: 1 }} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
            <DashboardBox title='COMMISSION' >
              <Commission />
            </DashboardBox  >
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <DashboardBox title='OFFICES'>

            </DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <DashboardBox title='LICENSES' >

            </DashboardBox>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 1, mb: 1 }} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
            <DashboardBox title='MLS BOARD' >
            </DashboardBox  >
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <DashboardBox title='TAX FORMS'>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://placehold.co/600x400"
                alt=""
              />
            </DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <DashboardBox title='CONTRACT' >
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
    </>
  );
};

export default Dashboard;
