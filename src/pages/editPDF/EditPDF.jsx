
import { useLocation } from "react-router-dom";
import PdfViewer from "../../components/pdfViewer/PdfViewer";
import { useRef } from "react";

export default function EditPDF() {

    const location = useLocation();
    const pdf = location.state;
    const selected = useRef({selected: []});

    return (
        <div className="p-6">
            <PdfViewer pdf={pdf} selected={selected} />
            <button onClick={()=>console.log(selected.current.selected)}>click me</button>
        </div>
    );
}