import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import { addScores, getScores } from "./dbService";

const app = express();

app.use(bodyparser.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.get("/score", async (req: Request, res: Response) => {
  const posts = await getScores();
  res.send(posts) 
});

app.post("/score", async (req: Request, res: Response) => {
  const {name, score} = req.body;

  const post = await addScores(name, score)
  res.status(201).send(post);
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
