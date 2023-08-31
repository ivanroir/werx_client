import * as React from "react";
import { useGetUserQuery } from "@/state/api";
import { useSelector } from "react-redux";
import { Box, CardMedia, Grid } from "@mui/material";
import BusinessCard from "@/components/BusinessCard";
import ContactInformation from "@/components/ContactInformation";

const Inbox = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  return (
    <React.Fragment>
        <BusinessCard user={data || {}} />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={6} md={6}>
          <ContactInformation />
        </Grid>
        <Grid item xs={2} sm={6} md={6}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={6} md={6} sx={{ mt: 1 }}>
              <Box
                sx={{
                  border: "1px solid grey",
                  borderRadius: "50px",
                  width: "100%",
                  height: "200px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={2} sm={6} md={6} sx={{ mt: 1 }}>
              <Box
                sx={{
                  border: "1px solid grey",
                  borderRadius: "50px",
                  width: "100%",
                  height: "200px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <Box
                sx={{
                  border: "1px solid grey",
                  borderRadius: "50px",
                  width: "100%",
                  height: "200px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <Box
                sx={{
                  border: "1px solid grey",
                  borderRadius: "50px",
                  width: "100%",
                  height: "200px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <Box
                sx={{
                  border: "1px solid grey",
                  borderRadius: "50px",
                  width: "100%",
                  height: "200px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <Box
                sx={{
                  border: "1px solid grey",
                  borderRadius: "50px",
                  width: "100%",
                  height: "200px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <Box
                sx={{
                  border: "1px solid grey",
                  borderRadius: "50px",
                  width: "100%",
                  height: "200px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <Box
                sx={{
                  border: "1px solid grey",
                  borderRadius: "50px",
                  width: "100%",
                  height: "200px",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Inbox;
