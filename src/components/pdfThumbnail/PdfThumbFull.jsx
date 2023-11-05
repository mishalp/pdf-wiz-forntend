
import { useState } from 'react'
import PdfThumbnail from './PdfThumbnail'
import PrimBtn from '../primeryBtn/PrimBtn'
import { useNavigate } from 'react-router-dom'
import Loader from '../loader/Loader'
import axios from 'axios'

function PdfThumbFull({ pdf, id }) {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const editPDF = (id) => {
        navigate(`/edit/${id}`)
    }

    const deletePdf = async(id) => {
        setLoading(true)
        setShow(true)
        try {
            const token = localStorage.getItem('token');
            const res = await axios.delete(`/api/pdf/delete/${id}`,{ headers: { 'Authorization': `Bearer ${token}`}})
            if(res.data.success) location.reload()
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false)
            setShow(false)
        }
    }

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <PdfThumbnail pdf={pdf} id={id} />
            {(show) &&
                <div className="absolute grid gird-col-1 gap-4 items-center content-center justify-center animate-fade inset-0 bg-[rgba(255,255,255,0.7)]">
                    {loading ?
                    <>
                        <Loader />
                    </> : <>
                        <PrimBtn text="Edit" clickHandler={() => editPDF(id)} className="!px-6" />
                        <PrimBtn text="Delete" clickHandler={() => deletePdf(id)} className="!px-6 bg-red-600" />
                    </>}
                </div>
            }
        </div>
    )
}

export default PdfThumbFull