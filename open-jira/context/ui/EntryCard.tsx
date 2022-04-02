import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  List,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography>説明</Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: "2" }}
        >
          <Typography>110:10</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
