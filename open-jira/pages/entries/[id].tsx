import type { GetServerSideProps, NextPage } from "next";
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
import { ChangeEvent, useMemo, useState } from "react";
import axios from "axios";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

const EntryPage: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<EntryStatus>("pending");
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) return;
  };

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
                value={inputValue}
                onBlur={() => setTouched(true)}
                label="入力してください"
                helperText={isNotValid ? "何か入力してください" : ""}
                error={isNotValid}
                onChange={onInputValueChanged}
              ></TextField>

              <FormControl>
                <FormLabel>完了状態:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChanged}>
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
              <Button
                onChange={onSave}
                startIcon={<SaveOutlined />}
                disabled={isNotValid}
                fullWidth
              >
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await axios.get(`/api/entries/${id}`);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: entry,
  };
};
export default EntryPage;
