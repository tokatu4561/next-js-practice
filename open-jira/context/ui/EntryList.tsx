import { List, Paper } from "@mui/material";
import React from "react";
import { EntryCard } from "./EntryCard";

export const EntryList = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "scroll",
          backgroundColor: "transparent",
        }}
      >
        <List>
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
