import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts/ShopLayout";
import { initialData } from "../database/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"shop - home"}
      pageDescription={"練習用のプロジェクトです"}
    >
      <Typography variant="h1" component="h1">
        shop
      </Typography>
      <Typography variant="h2">todos los product</Typography>

      <Grid container spacing={4}>
        {initialData.products.map((product) => (
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
        ))}
      </Grid>
    </ShopLayout>
  );
};

export default Home;
