import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import React, { FC } from "react";
import { IProduct } from "../../types/product";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Grid item xs={4} key={product.slug}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`products/${product.images[0]}`}
            alt={product.title}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};
