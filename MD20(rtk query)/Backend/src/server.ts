import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import {Animal} from "./models/animal"

const app = express();

mongoose.connect("mongodb://localhost:27017/Animals")

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.post("/add-animal", (req: Request, res: Response) => {
  const {name, image, breed} = req.body;

  const animal = new Animal({
    name: name,
    image: image,
    breed: breed
  });

  animal.save()
    .then((results) => {
      res.send(results)
    })
    .catch((err) =>{
      console.log(err);
      
    });
});

app.get("/all-animals", (req: Request, res: Response) => {
  Animal.find()
  .then((result)=>{
      res.send(result)
    })
  .catch((err) =>{
    console.log(err); 
  });
});

app.delete("/delete-animal/:id", (req: Request, res: Response) => {
  
  const id = req.params.id;

  console.log(id)
  Animal.findByIdAndRemove(id)
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
