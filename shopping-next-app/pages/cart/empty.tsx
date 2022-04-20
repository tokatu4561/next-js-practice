import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import React from "react";

import { ShopLayout } from "../../components/layouts/ShopLayout";

const EmptyPage = () => {
  return (
    <ShopLayout title="空のカート" pageDescription="カート内の商品がありません">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 200px)"
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box>
          <Typography>カートが空です</Typography>
          <NextLink href="/" passHref>
            <Link typography="h4" color="secondary">
              TOPに戻る
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
