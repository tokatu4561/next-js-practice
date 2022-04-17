import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </a>
        </Link>

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link href="/category/men">
            <a>
              <Button>Men</Button>
            </a>
          </Link>
          <Link href="/category/women">
            <a>
              <Button>Women</Button>
            </a>
          </Link>
          <Link href="/category/kid">
            <a>
              <Button>Kids</Button>
            </a>
          </Link>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <Link href="/cart">
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Link>

        <Button>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
