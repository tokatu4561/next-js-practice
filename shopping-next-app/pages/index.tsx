import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts/ShopLayout";

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
    </ShopLayout>
  );
};

export default Home;
