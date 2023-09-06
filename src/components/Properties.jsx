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
} from "@mui/material";
import { FixedSizeList } from "react-window";

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

const SoldProperties = ({ propertiesData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // dispatch(addCDA(value));
    } catch (error) {
      console.log(error);
    }
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
              maxHeight: 500,
            }}
            subheader={<li />}
            className="scrollbar"
          >
            {propertiesData.slice(0, 6).map((data) => (
              <>
                <ListItem key={data} alignItems="flex-start">
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
              </>
            ))}
          </List>
          <Box display="flex" justifyContent="end">
            <Button onClick={handleOpen} variant="contained">
              Upload
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <List
            sx={{
              width: "100%",
              position: "relative",
              overflow: "auto",
              maxHeight: 500,
            }}
            subheader={<li />}
            id="scrollbar"
          >
            {propertiesData.slice(0, 6).map((data) => (
              <>
                <ListItem key={data} alignItems="flex-start">
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
              </>
            ))}
          </List>
          <Box display="flex" justifyContent="end">
            <Button onClick={handleOpen} variant="contained">
              Upload
            </Button>
          </Box>
        </Grid>
      </Grid>
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
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label">
                  Upload File
                  <input
                    type="file"
                    name="file"
                    onChange={(e) => {
                      setValue({
                        ...value,
                        file: e.target.files[0],
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
    </>
  );
};

export default SoldProperties;
