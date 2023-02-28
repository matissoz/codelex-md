import { motion } from "framer-motion";
import { useState } from "react";
import AddPostModal from "./AddModal/AddPostModal";
import style from "./AddPostButton.module.css"


const AddPostButton = () => {

    const [selected, setSelected] = useState(false);

    return (
        <div>
            <motion.div 
                layoutId={`modal-addmodal`}
                className={style.addButton} 
                onClick={() => setSelected(true)}
            > 
                <span className={style.addButton__text}>Add Post</span>
            </motion.div>
            <AddPostModal selected={selected} setSelected={setSelected}/>
        </div>
    )
}

export default AddPostButton;