import { connect, Query } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { Blog } from "../../../utlis/model"

export type BlogType = {
    _id?: string,
    title: string,
    description: string,
    image_url: string,
    date: string,
}

export async function GET(request: Request) {

  await connect('mongodb://127.0.0.1:27017/foodblog');
  const res = await Blog.find();

  if(res){
    return NextResponse.json(res)
  }
  
  return new Response("something went wrong")
}

export async function POST(request: Request) {

  const {title, description, image_url} = await request.json();

  await connect('mongodb://127.0.0.1:27017/foodblog');
  const blog = new Blog({
    title: title,
    description: description,
    image_url: image_url
  });
  
  const res = await blog.save();

  return NextResponse.json(res)
}


