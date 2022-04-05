import type { NextPage } from "next";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Layout } from "../../components/layouts/Layout";
import { SaveOutlined } from "@mui/icons-material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { EntryStatus } from "../../interfaces/entry";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

const EntryPage: NextPage = () => {
  return (
    <Layout title="entry-detail">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title="詳細画面です" subheader={`aaaaa`} />
            <CardContent>
              <TextField
                fullWidth
                placeholder="テストテスト"
                autoFocus
                multiline
                label="入力してください"
              ></TextField>

              <FormControl>
                <FormLabel>完了状態:</FormLabel>
                <RadioGroup row>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button startIcon={<SaveOutlined />} fullWidth>
                編集
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "error.dark",
        }}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

export default EntryPage;
