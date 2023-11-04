import {  memo, useState } from "react";
import { Document } from "react-pdf";
import PdfPage from "../pdfpage/PdfPage";

 function PdfViewer({ pdf }) {

    const [numPages, setNumPages] = useState(0);
    
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (<>
        <Document
            className="grid grid-cols-[repeat(auto-fill,_minmax(155px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 justify-items-center"
            file={pdf}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            {Array.from(new Array(numPages), (el, index) => (<>
                <PdfPage numPages={numPages} index={index} key={index +1} />
                </>
            ))}
        </Document>
        </>
    );
}

export default memo(PdfViewer)