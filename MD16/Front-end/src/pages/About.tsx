import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { addImage, getImages } from "../api/api";


const Uplaod = (() => {
    const [file, setFile] = useState<FormData>();

    const addImageMutation = useMutation({
        mutationFn: addImage,
    })

    const imagesQuery = useQuery({
        queryKey: ['images'],
        queryFn: getImages,
    });

    if(imagesQuery.isLoading) return <div>Loading..</div>;
    if(imagesQuery.isError) return <div>Loading..</div>;

    const data = imagesQuery.data;

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData(); 
        //FILE INFO NAME WILL BE "my-image-file"
        if(e.target.files != null){
            formData.append("image", e.target.files[0], e.target.files[0].name);
            setFile(formData);
        }
    }

    const handleUpload = (() =>{
        addImageMutation.mutate(file!)
    })

    return (
        <div>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileSelected}/>
                <button>Submit</button>
            </form>   
            <div>    
                {data &&
                    data.map((data: any, i:any) =><img src={`http://localhost:3005${data}`} key={i} width="100"/>)
                }
            </div>
        </div>
    )
})

export default Uplaod;