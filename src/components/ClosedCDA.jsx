import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
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
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  useGetCDAListQuery,
  useGetUserListQuery,
  useGetCDAQuery,
  useStoreCDAQuery,
  useGetUserQuery,
} from "@/state/api";
import { useSelector, useDispatch } from "react-redux";
import { addCDA } from "@/state";
import Swal from "sweetalert2";
import TableData from "./TableData";
import { DataGrid } from "@mui/x-data-grid";

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

const ClosedCDA = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const { data: getUserListData } = useGetUserListQuery();
  const { data: getCDAListQuery, isLoading: isLoadingCDAList } =
    useGetCDAListQuery();

  const [clickedRow, setClickedRow] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fileInputRef = useRef(null);

  const userId = useSelector((state) => state.global.userId);

  const [value, setValue] = useState({
    userID: userId,
    agent: "",
    name: "",
    file: "",
  });

  const onButtonClick = (e, row) => {
    e.stopPropagation();
    console.log("🚀 ~ file: ClosedCDA.jsx:68 ~ onButtonClick ~ row:", row);
    setClickedRow(row);
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

  const cdaColumnConfig = [
    {
      field: "file",
      headerName: "Thumbnails",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "agentID",
      headerName: "Agents",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={(e) => onButtonClick(e, params.row)}
              variant="contained"
            >
              Show
            </Button>
            <Button
              onClick={(e) => onButtonClick(e, params.row)}
              variant="contained"
            >
              Edit
            </Button>
            <Button
              onClick={(e) => onButtonClick(e, params.row)}
              variant="contained"
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Box
        gridColumn="span 8"
        gridRow="span 3"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            borderRadius: "5rem",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.background.alt,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
          height: 900,
          width: "100%",
        }}
      >
        <DataGrid
          loading={isLoadingCDAList || !getCDAListQuery}
          getRowId={(row) => row._id}
          rows={getCDAListQuery || []}
          columns={cdaColumnConfig}
        />
      </Box>
      clickedRow: {clickedRow ? `${clickedRow._id}` : null}
      <Box display="flex" justifyContent="end" pt={1}>
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
