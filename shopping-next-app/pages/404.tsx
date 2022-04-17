import { Box, Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../components/layouts/ShopLayout";

const Custom404 = () => {
  return (
    <ShopLayout
      title="page not found"
      pageDescription="ページ情報が見つかっていません"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 300px)"
      >
        <Typography variant="h1" component="h1">
          404 |
        </Typography>
        <Typography variant="h1" component="h1">
          Page Not Found
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
