import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import React, { FC, useMemo, useState } from "react";
import { IProduct } from "../../types/product";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHoverd, setIsHoverd] = useState(false);

  const productImage = useMemo(() => {
    return isHoverd
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;
  }, [isHoverd, product.images]);

  return (
    <Grid
      item
      xs={4}
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <Card>
        <NextLink href="/product/slug" passHref prefetch={false}>
          <CardActionArea>
            <CardMedia
              className="fadeIn"
              component="img"
              image={productImage}
              alt={product.title}
            />
          </CardActionArea>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.title}`}</Typography>
      </Box>
    </Grid>
  );
};
