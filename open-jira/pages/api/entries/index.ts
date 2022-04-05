import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { EntryModel } from "../../../models";
import { Entry } from "../../../interfaces/entry";

type Data = { message: string } | Entry[] | Entry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEntries(res);

    default:
      return res.status(400).json({ message: "GETメソッドのみ許可しています" });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await EntryModel.find().sort({ createdAt: "ascending" });
  await db.disconnect();

  return res.status(200).json(entries);
};
