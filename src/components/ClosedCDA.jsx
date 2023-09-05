import React, { useState, useRef } from "react";
import {
  Paper,
  Stack,
  Modal,
  CardMedia,
  Button,
  Box,
  Typography,
  Autocomplete,
  TextField,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  useGetCDAListQuery,
  useGetCDAQuery,
  useStoreCDAQuery,
  useGetUserListQuery,
} from "@/state/api";
import { useSelector, useDispatch } from "react-redux";
import { addCDA } from "@/state";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ClosedCDA = () => {
  const dispatch = useDispatch();
  // const { isSuccess } = useSelector((state) => state.user);

  const { data: getUserListData } = useGetUserListQuery();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fileInputRef = useRef(null);

  const [value, setValue] = useState();
  // const { data: getCDAList, isLoading } = useGetCDAListQuery();
  // const { data: getUserList, isLoading } = useGetUserListQuery();

  console.log(
    "🚀 ~ file: ClosedCDA.jsx:49 ~ ClosedCDA ~ getUserListData:",
    getUserListData
  );

  const users = useSelector((state) => {
    return state.global;
  });

  const handleFile = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addCDA(value));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ padding: 1 }}
      >
        <Item>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://placehold.co/600x400"
            alt=""
          />
        </Item>
        <Item>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://placehold.co/600x400"
            alt=""
          />
        </Item>
        <Item>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://placehold.co/600x400"
            alt=""
          />
        </Item>
        <Item>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://placehold.co/600x400"
            alt=""
          />
        </Item>
        <Item>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://placehold.co/600x400"
            alt=""
          />
        </Item>
        <Item>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://placehold.co/600x400"
            alt=""
          />
        </Item>
        <Item>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://placehold.co/600x400"
            alt=""
          />
        </Item>
      </Stack>
      <Box display="flex" justifyContent="end">
        <Button onClick={handleOpen} variant="contained">
          Upload
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  pb={1}
                >
                  Commission Disbursement Authorization
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id="cboCDA"
                  options={getUserListData}
                  sx={{ width: "100%" }}
                  value={value}
                  getOptionLabel={(option) => option.firstName || ""}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="User" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label">
                  Upload File
                  <input
                    type="file"
                    name="file"
                    onChange={(e) => {
                      setValue({
                        ...value,
                        file: e.target.files[0]
                        // [e.target.name]: fileInputRef.current.files[0],
                      });
                    }}
                    hidden
                    ref={fileInputRef}
                  />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

export default ClosedCDA;
