import express from "express";
import { getPetsOwners } from "./db";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    res.json(await getPetsOwners());
  } catch (e) {
    console.error(`Error while fetching data `, e);
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
