import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
import cors from "cors";
import multer from "multer";
import { getPosts, 
        getPostComments, 
        getPost, 
        addPost,
        editPost,
        deletePost,
        deleteComment,
        addComment,
        addImage} from "./dbService"
import { imageValidation, inputValidation } from "./validation";
import { readdirSync } from "fs";


const app = express();
app.use("/static", express.static("public"));

app.use(bodyparser.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ 
    storage,
    fileFilter: ((req, file, cb) => {
      imageValidation(req, file, cb)
    })
 });
 
app.post(
  "/upload-image",
  upload.single("image"),
  async (req: Request, res: Response, err) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if(req.file == undefined){
      console.log('Nothing was uploaded!')
      return res.send('Nothing was uploaded!')
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const imageName = req.file.filename;
    const imgId ='1';

    const image = await addImage(imageName, imgId)
    return res.send(image)
  }
);

app.get("/posts", async (req: Request, res: Response) => {
  const posts = await getPosts();
  res.send(posts) 
});


app.get("/posts/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const post = await getPost(id);
  if(post.length == 0){
    console.log('post not found')
    return res.status(404)
  }

  res.send(post)
});


app.delete("/posts/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const post = await deletePost(id);
   
  res.send(post)
});


app.get("/comments/:postId", async (req: Request, res: Response) => {
  const postId = req.params.postId;
  const comments = await getPostComments(postId)
  res.send(comments);
});


app.post("/posts", async (req: Request, res: Response) => {
  const {title, text, img, imgId, upload} = req.body;
  const validation = inputValidation(title, text);

  if(validation != ''){
    console.log(validation)
    return res.send(validation)
  }

  // if(upload){
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   if(req.file == undefined){
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //     console.log('Nothing was uploaded!' + req.file)
  //     return res.send('Nothing was uploaded!')
  //   }
    
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
  //   // @ts-ignore
  //   const imageName = `http://localhost:3005/static/${req.file.filename}`;
  //   const imageId = '1';
    
  //   const image = await addImage(imageName, imgId)
  //   const post = await addPost(title, text, imageName, imageId)
  //   return res.send(post)
  // }



  const post = await addPost(title, text, img, imgId)
  res.status(201).send(post);
});


app.put("/posts/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const {title, text, img, imgId} = req.body;
  
  const validation = inputValidation(title, text);
  if(validation != ''){
    console.log(validation)
    return res.send(validation)
  }

  const post = await editPost(id, title, text, img, imgId)
  res.status(201).send(post);
});


app.delete("/comments/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const post = await deleteComment(id)
  res.status(201).send(post);
});


app.post("/comments", async (req: Request, res: Response) => {
  const {author, text, postId} = req.body;

  const validation = inputValidation(author, text);
  if(validation != ''){
    console.log(validation)
    return res.send(validation)
  }

  const post = await addComment(author, text, postId)
  res.status(201).send(post);
});

app.get("/all-image-link", (req, res) => {
  const files = readdirSync("public");

  const imagePaths = files.map((imagePath) => `/static/${imagePath}`);

  res.json(imagePaths);
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3005, () =>{
  console.log('server running');
});