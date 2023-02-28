import { connect, Query } from "mongoose";
import { NextResponse } from "next/server";
import { Blog } from "../../../../utlis/model"

export type BlogType = {
    _id?: string,
    title: string,
    description: string,
    image_url: string,
    date: string,
}

//@ts-ignore
export async function GET(request: Request, {params}) {
  const id = params.id;

  await connect('mongodb://127.0.0.1:27017/foodblog');
  const res = await Blog.findById(id);

  if(res){
    return NextResponse.json(res)
  }
  
  return new Response("something went wrong")
}

//@ts-ignore
export async function DELETE(request: Request, {params}) {
  const id = params.id;

  await connect('mongodb://127.0.0.1:27017/foodblog');
  const res = await Blog.findByIdAndRemove(id);

  if(res){
    return NextResponse.json(res)
  }
  
  return new Response("something went wrong")
}
