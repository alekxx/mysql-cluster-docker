import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Ok Radio" });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
