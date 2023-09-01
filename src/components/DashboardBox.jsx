import { useState } from "react";
import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const DashboardBox = ({ title, children, subTitle, caption, ...props }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 4"
      gridRow="span 3"
      backgroundColor={theme.palette.background.alt}
      p="1.5rem"
      borderRadius="0.55rem"
      height="100%"
      width="100%"
    >
      <Typography
        variant="h6"
        pb="1.5rem"
        sx={{ color: theme.palette.secondary[100] }}
      >
        {title}
      </Typography>
      {subTitle != null && (
        <Typography
          variant="body1"
          pb="0.5rem"
          sx={{ color: theme.palette.secondary[100] }}
        >
          {subTitle}
        </Typography>
      )}
      {children}
      {caption != null && (
        <Typography
          p="1rem 0rem"
          fontSize="0.8rem"
          sx={{ color: theme.palette.secondary[200] }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
};

export default DashboardBox;
