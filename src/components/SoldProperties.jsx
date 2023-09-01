import React from "react";
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
} from "@mui/material";
import { FixedSizeList } from "react-window";

const SoldProperties = ({ propertiesData }) => {
  return (
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
  );
};

export default SoldProperties;
