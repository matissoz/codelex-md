"use client"

import { BlogType } from "@/app/api/foodblog/route"
import { AnimatePresence, color, motion } from "framer-motion"
import { Dispatch, SetStateAction, useState } from "react"
import style from "./AddPostModal.module.css"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { IconContext } from "react-icons"
import axios from "axios"

type Props = {
    selected: boolean,
    setSelected: Dispatch<SetStateAction<boolean>>,
}

type AddPostType = {
    title: string,
    description: string,
    image_url: string
}


async function AddPost({title, description, image_url}: AddPostType) {
    
    const res = await axios.post<AddPostType>(`http://localhost:3000/api/foodblog/`, {
        title: title,
        description: description,
        image_url: image_url,
    });
  
    if (!res) {
      throw new Error('Failed to delete data');
    }
  
    return res.data;
}
  
const Modal = ({selected, setSelected}: Props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleAdd = () => {
        AddPost({
            title: title, 
            description: description, 
            image_url: image
        })
    }

    
    if (!selected) {
        return <></>;
    }

    return (
        <div className={style.modal} 
            onClick={() => setSelected(false)}
        >
            <motion.div onClick={(e) => e.stopPropagation()}
                layoutId={`modal-addmodal`}
                className={style.modal__body}
            >   
                <form action="" className={style.form} onSubmit={() => handleAdd()}>
                    <span>
                        <h3>Title</h3>
                        <input 
                            value={title} onChange={(e) => setTitle(e.target.value)} 
                            required
                            type="text" placeholder="Burger..."
                        />
                    </span>

                    <span>
                        <h3>Description</h3>
                        <textarea 
                            value={description} onChange={(e) => setDescription(e.target.value)} 
                            required
                            rows={4} cols={50} placeholder="Legendary Story of Burger..."
                        />
                    </span>

                    <span>
                        <h3>Image Url</h3>
                        <input 
                            value={image} onChange={(e) => setImage(e.target.value)}
                            required
                            type="text" placeholder="Burger picture"
                        />
                    </span>

                    <motion.button
                        whileHover={{
                        scale: 1.025,
                        transition: {
                            duration: 0.2,
                        }
                        }}
                        whileTap={{
                            scale: 0.95
                        }}            
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
                        className={style.submitButton}
                    >
                        Submit
                    </motion.button>

                </form>
            </motion.div>
        </div>
    )
}

export default Modal;