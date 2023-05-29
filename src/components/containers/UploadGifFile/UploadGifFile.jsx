import axios from 'axios'
import { useRef } from 'react'
import { AwesomeButton } from 'react-awesome-button'
import { useForm } from 'react-hook-form'
import { NavBar } from '../NavBar/NavBar'
import { Footer } from '../../common/Footer/Footer'

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
    <>
    <NavBar />
        <div className="flex flex-col items-center justify-center w-full bg-[#DDE6ED] h-screen pt-60">
            <h1 className='text-5xl font-bold text-center mb-6'>Upload Gif</h1>
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef} className='flex flex-col items-center justify-center w-1/3'>
                <input type="text" placeholder="Title" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none mb-6" {...register("title")}/>
                <input type="text" placeholder="Description" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none mb-6" {...register("description")}/>
                <input type="file" placeholder="Select Gif" className="form-group w-full h-12 rounded-lg p-4 text-sm outline-none mb-6" {...register("file")}/>
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
