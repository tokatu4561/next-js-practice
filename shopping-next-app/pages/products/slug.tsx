import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { ProductSlideshow } from "../../components/products/ProductSlideshow";
import { initialData } from "../../database/products";

const product = initialData.products[0];

const Product = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Typography variant="h1" component="h1">
            {product.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
          >{`$${product.price}`}</Typography>

          <Button color="secondary" className="circular-btn">
            カートに追加する
          </Button>

          <Box>
            <Typography variant="subtitle1">Description</Typography>
            <Typography variant="body2">{product.description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default Product;
