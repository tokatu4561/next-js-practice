function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422), json({ message: "入力が間違っています" });
      return;
    }

    res.status(201).json({ message: "成功しました！" });
  }
}
