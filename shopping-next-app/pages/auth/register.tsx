import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { AuthLayout } from "../../components/layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="ログイン">
      <Box sx={{ width: 350 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              ログイン
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label="ID" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label="パスワード" type="password" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label="パスワード確認" type="password" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button color="secondary" className="circular-btn" fullWidth>
              ログイン
            </Button>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink href="/auth/login" passHref>
              <Link underline="always">既にアカウントをお持ちですか？</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;
