"use client"

import { BlogType } from "@/app/api/foodblog/route"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction, useState } from "react"
import style from "./card.module.css"

type Props = {
    data: BlogType,
    setSelected: Dispatch<SetStateAction<BlogType | null>>, 
    selected: BlogType | null,
}

const Card = ({data, selected, setSelected}: Props) => {

    return (
        <motion.div 
            layoutId={`card-${data._id}`}
            whileHover={{
                scale: 1.025,
                transition: {
                    duration: 0.2,
                }
            }}
            whileTap={{
                scale: 0.95
            }}
            onClick={() =>{ setSelected(data)}}

            className={style.card}
        >
            <img src={data.image_url} height="250" width="400" className={style.image}/>
            <h2>{data.title}</h2>
            <p>{data.description.slice(0, 20)}...</p>
        </motion.div>
    )
}

export default Card;