import React, { useState, useRef, useEffect } from "react";
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
  FormControl,
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
import Swal from "sweetalert2";
import TableData from "./TableData";
import { Document, Page, pdfjs  } from "react-pdf";
import pdf from "./FIBA23.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

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

  const { data: getUserListData } = useGetUserListQuery();
  const { data: getCDAListQuery } = useGetCDAListQuery();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fileInputRef = useRef(null);
  const userId = useSelector((state) => state.global.userId);

  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const [value, setValue] = useState({
    userID: userId,
    agent: "",
    name: "",
    file: "",
  });

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addCDA(value)).then(() => {
        Swal.fire({
          title: "Saved",
          text: "CDA File was added Successfully",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Confirm",
          allowOutsideClick: false,
          customClass: {
            container: "swal-index",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            handleClose();
            setValue({ userID: userId, agent: "", name: "", file: "" });
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleAutoChange = (e, newValue, name) => {
    setValue({
      ...value,
      [name]: newValue,
    });
  };

  const columnConfig = [
    {
      id: "image",
      numeric: false,
      disablePadding: false,
      label: "Thumbnails",
    },
    {
      id: "name",
      numeric: false,
      disablePadding: false,
      label: "Name",
    },
    {
      id: "agents",
      numeric: false,
      disablePadding: false,
      label: "Agents",
    },
  ];

  const data = [
    { name: "Cupcake", agents: 3.7, image: "cupcake.jpg" },
    { name: "Donut", agents: 25.0, image: "donut.jpg" },
  ];

  console.log("🚀 ~ file: ClosedCDA.jsx:28 ~ pdf:", pdf);

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ padding: 1, overflow: "auto", maxWidth: "1475px" }}
        className="scrollbar"
      >
        {getCDAListQuery?.map((data, index) => {
          return (
            <Item key={index}>
              <Button>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="https://placehold.co/600x400"
                  alt=""
                />
              </Button>
            </Item>
          );
        })}
      </Stack>
      <Box display="flex" justifyContent="end" pt={1}>
        <Button onClick={handleOpen} variant="contained">
          Upload
        </Button>
      </Box>

      <div>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>

      <TableData data={data} columnConfig={columnConfig} />
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
                  id="agent"
                  options={getUserListData || []}
                  sx={{ width: "100%" }}
                  value={value.agent || ""}
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
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    name="name"
                    variant="outlined"
                    color="secondary"
                    label="Name"
                    onChange={handleChange}
                    value={value.name}
                    fullWidth
                    required
                  />
                </FormControl>
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
                        file: e.target.files[0],
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

export default ClosedCDA;
