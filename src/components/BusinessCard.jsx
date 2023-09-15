import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Link,
  useTheme,
  Grid,
  Paper,
  ListItemIcon,
} from "@mui/material";
import {
  Check,
  Call,
  ContactMailOutlined,
  Email,
  LocationOnOutlined,
  ContentCopy,
  Launch,
} from "@mui/icons-material";
import { Link as LinkRouter } from "react-router-dom";
import FlexBetween from "@/components/FlexBetween";
import logo from "@/assets/logo.png";

const BusinessCard = ({ user }) => {
  const theme = useTheme();

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <FlexBetween backgroundColor={theme.palette.background.alt}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={7}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            height="100%"
            >
            <Grid item xs={12}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={2}>
                  <Box p="1rem">
                    <Avatar
                      alt=""
                      src="https://placehold.co/600x400"
                      sx={{ width: 124, height: 124 }}
                    />
                    <LinkRouter to="/">
                      <Button
                        variant="contained"
                        sx={{
                          m: 1,
                          borderRadius: "50px",
                          textTransform: "none",
                        }}
                      >
                        Producing
                      </Button>
                    </LinkRouter>
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <Box p="1.5rem 0 0 0 ">
                    <Typography
                      component="div"
                      fontWeight="bold"
                      fontSize="1.2rem"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      {user.firstName} {user.middleName} {user.lastName}
                    </Typography>
                    <Typography
                      component="div"
                      fontWeight="500"
                      fontSize="0.75rem"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      License: {user.licenseNumber} {bull} Expires {user.licenseExpirationDate}
                    </Typography>
                    <Link
                      href={user.sponsorLink}
                      fontWeight="500"
                      fontSize="0.75rem"
                      sx={{ color: theme.palette.grey[10] }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ContentCopy sx={{ color: theme.palette.neutral[600], fontSize: "12px" }} />
                      Copy Sponsor Link
                    </Link>
                    <Typography
                      component="div"
                      fontWeight="500"
                      fontSize="0.75rem"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      JoinReal Email: {user.email} |{" "}
                      <Link
                        href={user.website}
                        fontWeight="500"
                        fontSize="0.75rem"
                        sx={{ color: theme.palette.grey[10] }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Launch sx={{ color: theme.palette.neutral[600], fontSize: "12px" }} />
                        Agent Website
                      </Link>
                    </Typography>
                    <Typography
                      component="div"
                      fontWeight="500"
                      fontSize="0.75rem"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      ⓢ Stock Purchase Plan Opted In:
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Check />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "50px",
                          marginRight: "5px",
                          "& > *:first-child": {
                            marginRight: "5px",
                          },
                        }}
                      >
                        Yes
                      </Button>{" "}
                      Shareworks ID: #{user.shareworksId}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FlexBetween
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              >
                <LinkRouter to="/contact">
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={logo}
                    alt=""
                  />
                </LinkRouter>
              </FlexBetween>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <FlexBetween sx={{ display: "flex" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                fontWeight="500"
                fontSize="0.8rem"
                sx={{ color: theme.palette.grey[10] }}
              >
                Contact Information
              </Typography>
              <Box sx={{ p: 1, border: "1px solid grey", mb: 1 }}>
                <Box sx={{ padding: "4px", display: "flex" }}>
                  <Call sx={{ color: theme.palette.neutral[600] }} />
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.65rem"
                    pl="0.3rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    ({user.countryCode}) {user.phoneNumber}
                  </Typography>
                </Box>
                <Box sx={{ padding: "4px", display: "flex" }}>
                  <ContactMailOutlined
                    sx={{ color: theme.palette.neutral[600] }}
                  />
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.65rem"
                    pl="0.3rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    {user.email}
                  </Typography>
                </Box>
                <Box sx={{ padding: "4px", display: "flex" }}>
                  <Email sx={{ color: theme.palette.neutral[600] }} />
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.65rem"
                    pl="0.3rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    {user.email}
                  </Typography>
                </Box>
                <Box sx={{ padding: "4px", display: "flex" }}>
                  <LocationOnOutlined
                    sx={{ color: theme.palette.neutral[600] }}
                  />
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.65rem"
                    pl="0.3rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    {user.address}, {user.city}, {user.state} {user.zip}
                  </Typography>
                </Box>
              </Box>

              <Typography
                component="div"
                fontWeight="500"
                fontSize="0.8rem"
                sx={{ color: theme.palette.grey[10] }}
              >
                Transactions
                <Link
                  component="button"
                  variant="caption"
                  sx={{ textAlign: "start", ml: 1 }}
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  See all
                </Link>
              </Typography>
              <Box
                sx={{ p: 1, border: "1px solid grey", display: "flex", mb: 1 }}
              >
                <Box
                  sx={{
                    padding: "4px",
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: 8,
                  }}
                >
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    0
                  </Typography>
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.75rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    Active
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "4px",
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: 8,
                  }}
                >
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    0
                  </Typography>
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.75rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    Closed
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "4px",
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: 8,
                  }}
                >
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    0
                  </Typography>
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.75rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    Terminated
                  </Typography>
                </Box>
              </Box>

              <Typography
                component="div"
                fontWeight="500"
                fontSize="0.8rem"
                sx={{ color: theme.palette.grey[10] }}
              >
                Listings
                <Link
                  component="button"
                  variant="caption"
                  sx={{ textAlign: "start", ml: 1 }}
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  See all
                </Link>
              </Typography>
              <Box sx={{ p: 1, border: "1px solid grey", display: "flex" }}>
                <Box
                  sx={{
                    padding: "4px",
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: 8,
                  }}
                >
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    0
                  </Typography>
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.75rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    Active
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "4px",
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: 8,
                  }}
                >
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    0
                  </Typography>
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.75rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    Closed
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "4px",
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: 8,
                  }}
                >
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    0
                  </Typography>
                  <Typography
                    component="div"
                    fontWeight="500"
                    fontSize="0.75rem"
                    sx={{ color: theme.palette.grey[10] }}
                  >
                    Terminated
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </FlexBetween>
        </Grid>
      </Grid>
    </FlexBetween>
  );
};

export default BusinessCard;
