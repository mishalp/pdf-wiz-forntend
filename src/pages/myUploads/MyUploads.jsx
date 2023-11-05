import { useEffect, useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import LoaderFull from "../../components/loaderWrap/LoaderFull";
import Title from "../../components/title/Title";
import PdfThumbFull from "../../components/pdfThumbnail/PdfThumbFull";


export default function MyUploads() {
    const navigate = useNavigate()
    const { pdfs } = useLoaderData()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if (pdfs === false) navigate("/login")
        console.log(pdfs);
        setLoading(false)
    }, [])

    return (
        <div className="p-8 flex flex-col gap-5">
            {loading ? (
                <LoaderFull />
            ) : (
                <>
                    {pdfs.length == 0 ? <p className="text-center p-16">No Uploads</p> : <>
                        <Title text="My Uploads" />
                        <div
                            className="grid grid-cols-[repeat(auto-fill,_minmax(155px,_1fr))] my-4 sm:grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-5 justify-items-center"
                        >
                            {pdfs.map((item, index) => (
                                <PdfThumbFull pdf={item.url} id={item.id} key={index} />
                            ))}
                        </div>
                    </>}
                </>
            )}
        </div>
    )
}
