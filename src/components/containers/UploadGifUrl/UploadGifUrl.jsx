import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { NavBar } from '../NavBar/NavBar'
import { Footer } from '../../common/Footer/Footer'
import { AwesomeButton } from 'react-awesome-button'
import { toast } from 'react-hot-toast'

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
            toast.success("Gif Uploaded Successfully")

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
    <>  
        <NavBar />
        <div className="flex flex-col items-center justify-center w-full bg-[#DDE6ED] h-screen pt-60">
            <h1 className='text-5xl  font-bold text-center mb-6'>Upload Gif</h1>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center w-1/3'>
                <input type="text" placeholder="Title" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none mb-6" {...register("title")}/>
                <input type="text" placeholder="Description" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none mb-6" {...register("description")}/>
                <input type="text" placeholder="Url" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none" {...register("url")}/>
                <button type="submit">
                    <AwesomeButton className='text-xl mt-6'>

                    Save Gif
                    </AwesomeButton>
                </button>
            </form> 
        </div>
        <Footer />
    </>
  )
}
