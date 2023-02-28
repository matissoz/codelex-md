"use client"

import { BlogType } from "@/app/api/foodblog/route"
import { AnimatePresence, motion } from "framer-motion"
import { Dispatch, SetStateAction, useState } from "react"
import style from "./list.module.css"
import Card from "./card/card"

type Props = {
    setSelected: Dispatch<SetStateAction<BlogType | null>>,
    selected: BlogType | null,
    data: BlogType[] | null
}

const List = ({data, selected, setSelected}: Props) => {
    return (
    <>
        {data && data.map(data => <Card selected={selected} key={data._id} data={data} setSelected={setSelected}/>)}
    </>
    )
}

export default List;