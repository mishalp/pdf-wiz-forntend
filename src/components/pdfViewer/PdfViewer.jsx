import {  useState } from "react";
import { Document } from "react-pdf";
import PdfPage from "../pdfpage/PdfPage";

export default function PdfViewer({ pdf, selected }) {

    const [numPages, setNumPages] = useState(0);
    
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (<>
        <Document
            className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 justify-items-center"
            file={pdf}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            {Array.from(new Array(numPages), (el, index) => (
                <PdfPage index={index} key={index +1} selected={selected} />
            ))}
        </Document>
        </>
    );
}