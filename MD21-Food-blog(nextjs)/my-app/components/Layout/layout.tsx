"use client"

import { BlogType } from "@/app/api/foodblog/route"
import { useState } from "react"
import List from "./List/list"
import style from "./layout.module.css"
import Modal from "./Modal/modal"

type Props = {
    data: BlogType[];
}

const Layout = ({data}: Props) => {  
    const [selected, setSelected] = useState<BlogType | null>(null);


    return (
    <>
        <div className={style.layout}>
            <List selected={selected} data={data} setSelected={setSelected}/>
            <Modal data={data} selected={selected} setSelected={setSelected}/>
        </div>
    </>
    )
}

export default Layout;