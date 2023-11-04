
import { useLoaderData, useNavigate } from "react-router-dom";
import PdfViewer from "../../components/pdfViewer/PdfViewer";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../../store/StoreContext";
import PrimBtn from "../../components/primeryBtn/PrimBtn";
import axios from "axios";

export default function EditPDF() {
    const { pdf, id } = useLoaderData()
    const { selected, totalPages, setTotalPages } = useContext(StoreContext)
    const navigate = useNavigate()

    useEffect(() => {
        setTotalPages(pdf.pages)
    }, [])

    const editPdf = async () => {
        if (selected.length <= 0) return alert("No pages Selected")
        try {
            const res = await axios.post(`/api/pdf/edit/${id}`, { pages: selected })
            navigate(`/download/${id}`, {state: res.data.url})
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="p-6 flex flex-col gap-6">
            <h2 className="mx-auto flex gap-2 items-center text-4xl font-bold font-poppins text-secondary">
                <img width="60" className="inline-block w-9" height="60" src="https://img.icons8.com/ios-glyphs/60/59656f/edit--v1.png" alt="edit--v1" />
                Edit PDF
            </h2>
            <div className=" p-8 rounded-md text-black flex flex-col gap-4 bg-primary shadow-md">
                <p>Total Pages: {totalPages}</p>
                <p className="grid grid-cols-[auto,1fr] gap-2 items-center">Selected Pages:
                <div className="flex flex-wrap gap-3">
                {selected.map(item =>
                    <span
                        key={item}
                        className="p-2 px-3 rounded-md cursor-pointer bg-secondary text-primary">
                        {item + 1}
                    </span>
                )}
                </div>
                </p>
            </div>
            <PdfViewer pdf={pdf.url} />
            <PrimBtn text="Submit" clickHandler={editPdf} className="mx-auto" />
        </div>
    );
}