import { useState } from "react";
import * as React from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  InputBase,
  IconButton,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import { Search } from "@mui/icons-material";

const DashboardBox = ({
  title,
  title2,
  children,
  subTitle,
  caption,
  ...props
}) => {
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography
            variant="h6"
            pb="1rem"
            sx={{ color: theme.palette.secondary[100] }}
          >
            {title}
          </Typography>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            pb="1rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </Grid>
        {title2 != null && (
          <Grid item xs={6}>
            <Typography
              variant="h6"
              pb="1rem"
              sx={{ color: theme.palette.secondary[100] }}
            >
              {title2}
            </Typography>
            <FlexBetween
              backgroundColor={theme.palette.background.alt}
              borderRadius="9px"
              gap="3rem"
              pb="1rem"
            >
              <InputBase placeholder="Search..." />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </Grid>
        )}
      </Grid>
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
