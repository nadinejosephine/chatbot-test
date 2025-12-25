
     import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chatbot API OK 🚀");
});

app.post("/chat", (req, res) => {
  const { message } = req.body;
  res.json({ reply: `Tu as dit : ${message}` });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Server running on", PORT));
