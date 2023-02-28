"use client"

import { BlogType } from "@/app/api/foodblog/route"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction, useState } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { IconContext } from "react-icons"
import DeleteButton from "./deleteButton/deleteButton"
import style from "./modal.module.css"

type Props = {
    data: BlogType[];
    selected: BlogType | null,
    setSelected: Dispatch<SetStateAction<BlogType | null>>,
}

const Modal = ({data, selected, setSelected}: Props) => {

    
    if (!selected) {
        return <></>;
    }

    const selectedIndex = data.findIndex(el => el._id == selected._id);
    const allDataLength = data.length;

    const handlePrevious = () =>{ 
        const previousPost = data[selectedIndex-1];
        setSelected(previousPost)
    }

    const handleNext = () =>{
        const previousPost = data[selectedIndex+1];
        setSelected(previousPost)
    }
    
    return (
        <div className={style.modal} 
            onClick={() => setSelected(null)}
        >
            <motion.div onClick={(e) => e.stopPropagation()}
                layoutId={`card-${selected._id}`}
                className={style.modal__body}
            >   
                {/* arrow for previous */}
                {selectedIndex > 0 && 
                    <motion.h3 
                        whileHover={{
                            scale: 1.125,
                            transition: {
                                duration: 0.2,
                            }
                        }}
                        whileTap={{
                            scale: 0.95
                        }}
                        onClick={() => handlePrevious()}
                        className={`${style.arrow} ${style.arrow__left} ${style.noselect}`}
                    >
                        <IconContext.Provider value={{ size: "100px", color: "white"}}>
                            <HiChevronLeft/>
                        </IconContext.Provider>
                    </motion.h3>
                }

                {/* recipe */}
                <div className={style.card}>
                    <div>
                        <img src={selected.image_url} className={style.image}/>
                    </div>
                    <motion.div
                        className={style.card__info}
                        initial={{
                            opacity: 0,
                            y: 50
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <h2>{selected.title}</h2>
                        <p>{selected.description}</p>

                        <div className={style.deleteButton}>
                            <DeleteButton selectedId={selected._id} setSelected={setSelected}/>
                        </div>
                        
                    </motion.div>
                </div>

                {/* arrow for next */}
                {selectedIndex < allDataLength-1 && 
                    <motion.h3 
                        whileHover={{
                            scale: 1.125,
                            transition: {
                                duration: 0.2,
                            }
                        }}
                        whileTap={{
                            scale: 0.95
                        }}
                        onClick={() => handleNext()}
                        className={`
                            ${style.arrow} 
                            ${style.arrow__right}
                            ${style.noselect}
                        `}
                    >
                        <IconContext.Provider value={{ size: "100px", color: "white"}}>
                            <HiChevronRight/>
                        </IconContext.Provider>
                    </motion.h3>
                }

            </motion.div>
        </div>
    )
}

export default Modal;