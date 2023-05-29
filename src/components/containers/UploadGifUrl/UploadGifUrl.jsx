import { useRef } from 'react'
import { useForm } from 'react-hook-form'

export const UploadGifUrl = () => {

    const {register, handleSubmit, reset} = useForm()

    const formRef = useRef(null)

    const uploadGif = async (formData) => {

        try{
            const response = await fetch("http://localhost:8080/gifs/url", {
                headers: { 
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(formData)
            })
            const data = await response.json()
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
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Title" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none" {...register("title")}/>
            <input type="text" placeholder="Description" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none" {...register("description")}/>
            <input type="text" placeholder="Url" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none" {...register("url")}/>
            <button type="submit" className="w-full h-12 rounded-lg p-4 text-sm outline-none">Save Gif</button>
        </form> 
    </div>
  )
}
