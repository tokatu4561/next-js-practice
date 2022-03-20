import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422), json({ message: "入力が間違っています" });
      return;
    }

    MongoClient.connect(
      "mongodb+srv://testUser:test1234@cluster0.nzvx0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ).then((client) => {
      const db = client.db();

      console.log(1);
      //   db.collection("emails");
    });

    res.status(201).json({ message: "成功しました！" });
  }
}

export default handler;
