import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts/ShopLayout";
import { ProductList } from "../components/products/ProductList";
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

      <ProductList products={initialData.products} />
    </ShopLayout>
  );
};

export default Home;
