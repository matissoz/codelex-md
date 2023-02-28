import { BlogType } from "@/app/api/foodblog/route";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import style from "./deleteButton.module.css"

type Props = {
    selectedId: string | undefined,
    setSelected: Dispatch<SetStateAction<BlogType | null>>,
}

async function deleteData(id: string) {
    const res = await axios.delete(`http://localhost:3000/api/foodblog/${id}`);
  
    if (!res) {
      throw new Error('Failed to delete data');
    }
  
    return res.data;
  }
  

const DeleteButton = ({selectedId, setSelected}: Props) => {

    const handleDelete = () => {
        if(selectedId){
            deleteData(selectedId)
            setSelected(null)
        }
    }

    return (
        <div className={style.deleteButton} onClick={() => handleDelete()}> 
            <span className={style.deleteButton__text}>DELETE</span>
        </div>
    )
    
}

export default DeleteButton;