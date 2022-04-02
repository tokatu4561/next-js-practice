import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  List,
  Paper,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Entry } from "../../interfaces/entry";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography>{entry.description}</Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: "2" }}
        >
          <Typography>{entry.createdAt}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
