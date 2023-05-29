import axios from 'axios'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'

export const UploadGifFile = () => {

    const {register, handleSubmit, reset} = useForm()

    const formRef = useRef(null)

    const uploadGif = async (form) => {

        try{
            const response = await axios.post("http://localhost:8080/gifs/file", form, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            const data = response.data
            console.log(data)
        
        }catch(error){
            console.log(error)
        }
    }

    const onSubmit = async (data) => {

        await uploadGif(data)
        reset()
    }
 

  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#DDE6ED] h-screen pt-60">
        <h1>Upload Gif</h1>
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
            <input type="text" placeholder="Title" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none" {...register("title")}/>
            <input type="text" placeholder="Description" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none" {...register("description")}/>
            <input type="file" placeholder="Select Gif" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none" {...register("file")}/>
            <button type="submit" className="w-full h-12 rounded-lg p-4 text-sm outline-none">Save Gif</button>
        </form> 
    </div>
  )
}
