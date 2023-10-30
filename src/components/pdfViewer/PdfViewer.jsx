import { useState } from "react";
import { Document, Outline, Page } from "react-pdf";

export default function PdfViewer({ pdf }) {

    const [numPages, setNumPages] = useState(0);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Document
            className="grid grid-cols-4 gap-1"
            file={pdf}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}

        >
            {Array.from(new Array(numPages), (el, index) => (
                <Page
                    className="border-2 border-black"
                    width={350}
                    height={200}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                />
            ))}
        </Document>
    );
}