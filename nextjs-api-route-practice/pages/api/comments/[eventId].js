function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "" });
      return;
    }

    const newComment = {
      id: new Date().toISOString,
      email,
      name,
      text,
    };

    res
      .status(201)
      .json({ message: "コメントを追加しました", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "max", text: "コメントです" },
      { id: "c2", name: "max", text: "コメントです" },
      { id: "c3", name: "max", text: "コメントです" },
    ];

    es.status(200).json({
      comments: dummyList,
    });
  }
}

export default handler;
