import React, { useState, useRef } from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  CardMedia,
  ListItemIcon,
  Typography,
  List,
  ListItemAvatar,
  Avatar,
  Divider,
  Grid,
  Button,
  Modal,
  Stack,
  TextField,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
  FormControl,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  Autocomplete,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import FlexBetween from "./FlexBetween";
import { Close } from "@mui/icons-material";
import dayjs from "dayjs";
import { FixedSizeList } from "react-window";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useGetUserListQuery } from "@/state/api";
import { addProperties } from "@/state";
import Swal from "sweetalert2";

const transactionType = ["Listing", "Purchase", "Lease"];
const propertyType = [
  "Residential",
  "Residential Income",
  "Land",
  "Commercial",
  "Industrial",
  "Other",
];
const propertyStatus = [
  "None",
  "Active",
  "Closed",
  "Pending",
  "Active Contingent",
];

const states = [
  { abbr: "AE", state: "APO" },
  { abbr: "AL", state: "Alabama" },
  { abbr: "AK", state: "Alaska" },
  { abbr: "AZ", state: "Arizona" },
  { abbr: "AR", state: "Arkansas" },
  { abbr: "CA", state: "California" },
  { abbr: "CO", state: "Colorado" },
  { abbr: "CT", state: "Connecticut" },
  { abbr: "DE", state: "Delaware" },
  { abbr: "DC", state: "District of Columbia" },
  { abbr: "FL", state: "Florida" },
  { abbr: "GA", state: "Georgia" },
  { abbr: "GU", state: "Guam" },
  { abbr: "HI", state: "Hawaii" },
  { abbr: "ID", state: "Idaho" },
  { abbr: "IL", state: "Illinois" },
  { abbr: "IN", state: "Indiana" },
  { abbr: "IA", state: "Iowa" },
  { abbr: "KS", state: "Kansas" },
  { abbr: "KY", state: "Kentucky" },
  { abbr: "LA", state: "Louisiana" },
  { abbr: "ME", state: "Maine" },
  { abbr: "MD", state: "Maryland" },
  { abbr: "MA", state: "Massachusetts" },
  { abbr: "MI", state: "Michigan" },
  { abbr: "MN", state: "Minnesota" },
  { abbr: "MS", state: "Mississippi" },
  { abbr: "MO", state: "Missouri" },
  { abbr: "MT", state: "Montana" },
  { abbr: "NE", state: "Nebraska" },
  { abbr: "NV", state: "Nevada" },
  { abbr: "NH", state: "New Hampshire" },
  { abbr: "NJ", state: "New Jersey" },
  { abbr: "NM", state: "New Mexico" },
  { abbr: "NY", state: "New York" },
  { abbr: "NC", state: "North Carolina" },
  { abbr: "ND", state: "North Dakota" },
  { abbr: "OH", state: "Ohio" },
  { abbr: "OK", state: "Oklahoma" },
  { abbr: "OR", state: "Oregon" },
  { abbr: "PA", state: "Pennsylvania" },
  { abbr: "PR", state: "Puerto Rico" },
  { abbr: "RI", state: "Rhode Island" },
  { abbr: "SC", state: "South Carolina" },
  { abbr: "SD", state: "South Dakota" },
  { abbr: "TN", state: "Tennessee" },
  { abbr: "TX", state: "Texas" },
  { abbr: "UT", state: "Utah" },
  { abbr: "VT", state: "Vermont" },
  { abbr: "VI", state: "Virgin Islands" },
  { abbr: "VA", state: "Virginia" },
  { abbr: "WA", state: "Washington" },
  { abbr: "WV", state: "West Virginia" },
  { abbr: "WI", state: "Wisconsin" },
  { abbr: "WY", state: "Wyoming" },
];

const source = [
  "Other",
  "Website",
  "Zillow",
  "Realtor",
  "Mojo",
  "Bold",
  "Facebook",
  "Snapchat",
  "Instagram",
  "Referral",
  "Referral from Past Client ",
  "Sign call",
  "Personal Friend ",
  "Google ",
  "Past Client ",
  "Lender Referral",
  "Post Card",
];
const SoldProperties = ({ propertiesData }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [imageURL, setImageURL] = useState();
  const userId = useSelector((state) => state.global.userId);
  const [input, setInput] = useState({
    userID: userId,
    mls: "",
    transactionType: "",
    propertyType: "",
    propertyStatus: "",
    street: "",
    city: "",
    states: "",
    postalCode: "",
    salesPrice: "",
    units: "",
    commission: "",
    bonus: "",
    source: "",
    transactionCoordinatorFee: "",
    splitPaid: "",
    officeFees: "",
    agent: "",
    escrowCompany: "",
    mortgageCompany: "",
    contractStartDate: dayjs(),
    contractExpirationDate: dayjs(),
    openEscrowDate: dayjs(),
    closingDate: dayjs(),
    image: "",
    imageURL: "",
  });
  const { data: getUserListData } = useGetUserListQuery();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fileInputRef = useRef(null);
  const theme = useTheme();

  const style = {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 5%)",
    width: "90%",
    bgcolor: theme.palette.alt,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addProperties(input)).then(() => {
        Swal.fire({
          title: "Saved",
          text: "Properties File was added Successfully",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Confirm",
          allowOutsideClick: false,
          customClass: {
            container: "swal-index",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            // handleClose();
            // setInput("");
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleAutoChange = (e, newValue, name) => {
    setInput({
      ...input,
      [name]: newValue,
    });
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <List
            sx={{
              width: "100%",
              position: "relative",
              overflow: "auto",
              maxHeight: 350,
            }}
            subheader={<li />}
            className="scrollbar"
          >
            {propertiesData.map((data, index) => (
              <Box key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <CardMedia
                      component="img"
                      sx={{ width: 64, paddingRight: 2 }}
                      image="https://placehold.co/600x400"
                      alt=""
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={data.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {data.headerName}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}>
          <List
            sx={{
              width: "100%",
              position: "relative",
              overflow: "auto",
              maxHeight: 350,
            }}
            subheader={<li />}
            className="scrollbar"
          >
            {propertiesData.map((data, index) => (
              <Box key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <CardMedia
                      component="img"
                      sx={{ width: 64, paddingRight: 2 }}
                      image="https://placehold.co/600x400"
                      alt=""
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={data.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {data.headerName}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
          <Box display="flex" justifyContent="end" sx={{ marginTop: "32px" }}>
            <Button onClick={handleOpen} variant="contained">
              Upload
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="end"
              color={theme.palette.alt}
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
              Properties
            </Typography>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Box sx={style}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  rowSpacing={2}
                >
                  <Grid
                    item
                    xs={12}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <CardMedia
                      component="img"
                      sx={{ maxWidth: 512, maxHeight: 256, objectFit: "fill", height: "100%" }}
                      image={input.imageURL}
                      alt=""
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Button variant="contained" component="label">
                      Upload Image
                      <input
                        type="file"
                        name="image"
                        onChange={(e) => {
                          setInput({
                            ...input,
                            image: e.target.files[0],
                            imageURL: URL.createObjectURL(e.target.files[0]),
                          });
                        }}
                        hidden
                        ref={fileInputRef}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              {/* Property Information */}
              <Grid item xs={12}>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h4">Property Information</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="mls"
                      variant="outlined"
                      color="secondary"
                      label="MLS Number"
                      onChange={handleChange}
                      value={input.mls}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={3} direction="row">
                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="transaction-type"
                          options={transactionType || []}
                          sx={{ width: "100%" }}
                          value={input.transactionType || ""}
                          getOptionLabel={(option) => option || ""}
                          isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                          }
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "transactionType")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Transaction Type" />
                          )}
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="property-type"
                          options={propertyType || []}
                          sx={{ width: "100%" }}
                          value={input.propertyType || ""}
                          getOptionLabel={(option) => option || ""}
                          isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                          }
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "propertyType")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Property Type" />
                          )}
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="property-status"
                          options={propertyStatus || []}
                          sx={{ width: "100%" }}
                          value={input.propertyStatus || ""}
                          getOptionLabel={(option) => option || ""}
                          isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                          }
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "propertyStatus")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Property Status" />
                          )}
                        />
                      </FormControl>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              {/* Address Information */}
              <Grid item xs={12}>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h4">Address Information</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="street"
                      variant="outlined"
                      color="secondary"
                      label="Street"
                      onChange={handleChange}
                      value={input.street}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={3} direction="row">
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="city"
                          variant="outlined"
                          color="secondary"
                          label="City"
                          onChange={handleChange}
                          value={input.city}
                          fullWidth
                          required
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="states"
                          options={states || []}
                          sx={{ width: "100%" }}
                          value={input.states || ""}
                          getOptionLabel={(option) => option.state || ""}
                          isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                          }
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "states")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="State" />
                          )}
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="postalCode"
                          variant="outlined"
                          color="secondary"
                          label="Postal Code"
                          onChange={handleChange}
                          value={input.postalCode}
                          fullWidth
                          required
                        />
                      </FormControl>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              {/* Price Information */}
              <Grid item xs={12}>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h4">Price Information</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={3} direction="row">
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="salesPrice"
                          variant="outlined"
                          color="secondary"
                          label="Sales Price"
                          onChange={handleChange}
                          value={input.salesPrice}
                          fullWidth
                          required
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="units"
                          variant="outlined"
                          color="secondary"
                          label="Units"
                          onChange={handleChange}
                          value={input.units}
                          fullWidth
                          required
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="commission"
                          variant="outlined"
                          color="secondary"
                          label="Commission"
                          onChange={handleChange}
                          value={input.commission}
                          fullWidth
                          required
                        />
                      </FormControl>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={3} direction="row">
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="bonus"
                          variant="outlined"
                          color="secondary"
                          label="Bonus"
                          onChange={handleChange}
                          value={input.bonus}
                          fullWidth
                          required
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="source-label"
                          options={source || []}
                          sx={{ width: "100%" }}
                          value={input.source || ""}
                          getOptionLabel={(option) => option || ""}
                          isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                          }
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "source")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Source" />
                          )}
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="transactionCoordinatorFee"
                          variant="outlined"
                          color="secondary"
                          label="Transaction Coordinator Fee"
                          onChange={handleChange}
                          value={input.transactionCoordinatorFee}
                          fullWidth
                          required
                        />
                      </FormControl>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={3} direction="row">
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="splitPaid"
                          variant="outlined"
                          color="secondary"
                          label="Split Paid"
                          onChange={handleChange}
                          value={input.splitPaid}
                          fullWidth
                          required
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="officeFees"
                          variant="outlined"
                          color="secondary"
                          label="Office Fees"
                          onChange={handleChange}
                          value={input.officeFees}
                          fullWidth
                          required
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="agent"
                          options={getUserListData || []}
                          sx={{ width: "100%" }}
                          value={input.agent || ""}
                          getOptionLabel={(option) => option.firstName || ""}
                          isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                          }
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "agent")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Agent" />
                          )}
                        />
                      </FormControl>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={3} direction="row">
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="escrowCompany"
                          variant="outlined"
                          color="secondary"
                          label="Escrow Company"
                          onChange={handleChange}
                          value={input.escrowCompany}
                          fullWidth
                          required
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          name="mortgageCompany"
                          variant="outlined"
                          color="secondary"
                          label="Mortgage Company"
                          onChange={handleChange}
                          value={input.mortgageCompany}
                          fullWidth
                          required
                        />
                      </FormControl>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              {/* Date Information */}
              <Grid item xs={12}>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h4">Date Information</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={3} direction="row">
                      <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="Contract Start Date"
                              name="contractStartDate"
                              value={input.contractStartDate}
                              slotProps={{ textField: { fullWidth: true } }}
                              onChange={(newValue) =>
                                setInput({
                                  ...input,
                                  contractStartDate: newValue,
                                })
                              }
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </FormControl>

                      <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="Contract Expiration Date"
                              name="contractExpirationDate"
                              value={input.contractExpirationDate}
                              slotProps={{ textField: { fullWidth: true } }}
                              onChange={(newValue) =>
                                setInput({
                                  ...input,
                                  contractExpirationDate: newValue,
                                })
                              }
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </FormControl>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={3} direction="row">
                      <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="Open Escrow Date"
                              name="openEscrowDate"
                              value={input.openEscrowDate}
                              slotProps={{ textField: { fullWidth: true } }}
                              onChange={(newValue) =>
                                setInput({
                                  ...input,
                                  openEscrowDate: newValue,
                                })
                              }
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </FormControl>

                      <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="Closing Date"
                              name="closingDate"
                              value={input.closingDate}
                              slotProps={{ textField: { fullWidth: true } }}
                              onChange={(newValue) =>
                                setInput({
                                  ...input,
                                  closingDate: newValue,
                                })
                              }
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </FormControl>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Dialog>
    </>
  );
};

export default SoldProperties;
