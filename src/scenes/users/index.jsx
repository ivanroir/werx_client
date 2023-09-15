import React, { useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { useGetUserListQuery } from "@/state/api";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Header from "@/components/Header";

const Users = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserListQuery(userId);
  const [clickedRow, setClickedRow] = useState();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "position",
      headerName: "Position",
      flex: 1,
    },
    {
      field: "isActive",
      headerName: "isActive",
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
  const onButtonClick = (e, row) => {
    e.stopPropagation();
    console.log("🚀 ~ file: ClosedCDA.jsx:68 ~ onButtonClick ~ row:", row);
    setClickedRow(row);
  };
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="USERS"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <Button onClick={(e) => onButtonClick(e, params.row)} variant="contained">
        Add Users
      </Button>
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
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
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      clickedRow: {clickedRow ? `${clickedRow._id}` : null}
      </Box>
    </Box>
  );
};

export default Users;
