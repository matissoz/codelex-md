import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { Crud } from "./models/crud"

const app = express();

mongoose.connect("mongodb://localhost:27017/CRUD")

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.post("/add-favourite-joke", (req: Request, res: Response) => {
  const {joke, category} = req.body;

  const crud = new Crud({
    joke: joke,
    category: category
  });

  crud.save() 
    .then((results) => {
      res.send(results)
    })
    .catch((err) =>{
      console.log(err);
      
    });
});


app.get("/all-favourite-jokes", (req: Request, res: Response) => {

  Crud.find()
  .then((result)=>{
      res.send(result)
    })
  .catch((err) =>{
    console.log(err); 
  });

});


app.delete("/delete-favourite-joke/:id", (req: Request, res: Response) => {

  const id = req.params.id;

  Crud.findByIdAndRemove(id)
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
