import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

interface Props {}

export const ItemCounter = () => {
  return (
    <Box>
      <IconButton>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ textAlign: "center" }}>1</Typography>
      <IconButton>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};
