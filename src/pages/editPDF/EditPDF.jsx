
import { useLocation } from "react-router-dom";
import PdfViewer from "../../components/pdfViewer/PdfViewer";

export default function EditPDF() {

    const location = useLocation();
    const pdf = location.state;
    console.log(pdf);
    return (
        <div className="p-6">
            <PdfViewer pdf={pdf} />
        </div>
    );
}