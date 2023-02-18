import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import {Blog} from "./models/blog"

const app = express();

mongoose.connect("mongodb://localhost:27017/Blog")

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.post("/add-blog", (req: Request, res: Response) => {
  const {title, text} = req.body;

  const blog = new Blog({
    title: title,
    text: text,
  });

  blog.save()
    .then((results) => {
      res.send(results)
    })
    .catch((err) =>{
      console.log(err);
      
    });
});

app.get("/all-blog", (req: Request, res: Response) => {
  Blog.find()
  .then((result)=>{
      res.send(result)
    })
  .catch((err) =>{
    console.log(err); 
  });
});

app.delete("/delete-blog/:id", (req: Request, res: Response) => {
  
  const id = req.params.id;

  console.log(id)
  Blog.findByIdAndRemove(id)
  .then((result)=>{
      res.send(result)
  })
  .catch((err) =>{
    console.log(err);
    
  });
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
