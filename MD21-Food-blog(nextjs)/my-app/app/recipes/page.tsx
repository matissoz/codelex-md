import axios from "axios";
import style from "./page.module.css"
import { BlogType } from "../api/foodblog/route";
import Layout from "@/components/Layout/layout";

async function getData() {
    const res = await axios.get('http://localhost:3000/api/foodblog');
  
    if (!res) {
      throw new Error('Failed to fetch data');
    }
  
    return res.data;
}

export default async function Recipes() {
  const data: BlogType[] = await getData();

  return (
    <div>
      <Layout data={data}/>
    </div>
  )
}
