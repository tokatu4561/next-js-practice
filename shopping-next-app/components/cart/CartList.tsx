import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { initialData } from "../../database/products";
import { ItemCounter } from "../ui/ItemCounter";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const CartList = () => {
  return (
    <>
      {productsInCart.map((product) => (
        <Grid container key={product.slug} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <NextLink href="/product/slug" passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`products/${product.images[0]}`}
                    component="img"
                    sx={{ borderRadius: "5px" }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>

          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                サイズ:<strong>M</strong>
              </Typography>

              <ItemCounter />
            </Box>
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography>{`$${product.price}`}</Typography>
            <Button variant="text" color="secondary">
              削除
            </Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
