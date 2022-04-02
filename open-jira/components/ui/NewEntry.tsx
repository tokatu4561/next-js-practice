import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import React, { FC } from "react";

export const NewEntry: FC = () => {
  return (
    <>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder="例：水を買う"
        autoFocus
        multiline
        label="Nueva entrada"
        helperText="入力してください"
      />
      <Box display="flex" justifyContent="space-between">
        <Button variant="text">キャンセル</Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          追加
        </Button>
      </Box>
    </>
  );
};
