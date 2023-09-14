/*
For Reference

This back up file is for the tableData file 
*/

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
  const { data: getCDAListQuery, isLoading: isLoadingCDAList } = useGetCDAListQuery();

  const [data, setData] = useState([]);
  const [dataAvailable, setDataAvailable] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fileInputRef = useRef(null);

  const userId = useSelector((state) => state.global.userId);
  const CDAList = useSelector((state) => state.global.cdaList);

  const [value, setValue] = useState({
    userID: userId,
    agent: "",
    name: "",
    file: "",
  });

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

  useEffect(() => {
    async function fetchData() {
      try {
        const processedData = CDAList?.map((item) => ({
          name: item.name,
          agents: item.agentID,
          image: item.file,
        }));

        if (processedData && processedData.length > 0) {
          setData(processedData);
          setDataAvailable(true);
        } else {
          setDataAvailable(false);
        }
      } catch (error) {
        console.error("Error fetching and processing data:", error);
      }
    }
    fetchData();
  }, [CDAList]);

  return (
    <>
      {dataAvailable && (
        <TableData data={data} columnConfig={cdaColumnConfig} />
      )}
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
