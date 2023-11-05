import { useState } from "react"
import Loader from "../../components/loader/Loader"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function Home() {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const fileChangeHandler = async (e) => {
    if (e.target.files[0]?.type === "application/pdf") {
      setLoading(true)
      const formData = new FormData()
      formData.append("file", e.target.files[0])
      try {
        const token = localStorage.getItem('token');
        const res = await axios.post(`${import.meta.env.VITE_SERVER}/pdf/upload`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data",'Authorization': `Bearer ${token}` }
          }
        )
        // const file = await getFetch(res.data.id)
        navigate(`/edit/${res.data.id}`)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    } else {
      alert("Only PDF file is accepted")
    }
  }

  return (
    <div className="flex flex-col gap-8 p-3 py-20 justify-center h-full">
      <h2 className="text-center text-4xl font-bold font-poppins">Upload Your PDF</h2>
      <div className={`relative mx-auto w-6/12 sm:w-4/12 md:w-3/12  flex justify-center items-center left-0 h-full ${loading && 'opacity-50'} bg-secondary  text-3xl  hover:bg-[#40484f] cursor-pointer rounded-md text-primary border-2 border-secondary duration-300 font-semibold`}>
        <input
          type="file"
          accept="application/pdf"
          required
          onChange={fileChangeHandler}
          name="" id=""
          className="w-full p-5 px-12 z-10 opacity-0"
          disabled={loading}
        />
        <div className="absolute top-0 z-0 left-0 w-full h-full flex items-center justify-center">
          {loading ? "Uploading..." : "Select PDF"}
        </div>

      </div>
      {loading && <Loader />}
    </div>
  )
}
