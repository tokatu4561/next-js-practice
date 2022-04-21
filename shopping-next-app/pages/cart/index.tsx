import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { CartList } from "../../components/cart/CartList";
import { OrderSummary } from "../../components/cart/OrderSummary";
import { ShopLayout } from "../../components/layouts/ShopLayout";

const CartPage = () => {
  return (
    <ShopLayout title="cart" pageDescription="カートに入っている商品一覧">
      <Typography variant="h1" component="h1">
        ショッピングカート
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* 商品一覧 */}
          <CartList />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card>
            <CardContent>
              <Typography variant="h2">詳細</Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />
              {/* カート内の商品の内訳 */}
              <Button sx={{ mt: 3 }} color="secondary" fullWidth>
                注文する
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
