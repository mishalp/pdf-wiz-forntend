import { memo, useRef, useState } from "react";
import { Document, Thumbnail } from "react-pdf";

 function PdfThumbnail({ pdf }) {

    const canvas = useRef()

    function onDocumentLoadSuccess({ numPages }) {
        // setNumPages(numPages);
    }
    return (
            <Document
                file={pdf}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
                className="flex items-center border-2 border-black p-1"
            >
                <Thumbnail
                    pageIndex={0}
                    width={300}
                    height={200}
                    canvasRef={canvas}
                    onLoadSuccess={() => {
                        let prev = canvas.current.className
                        canvas.current.className = prev + " !w-36 !h-auto sm:!w-34"
                    }}
                />
            </Document>
    )
}

export default memo(PdfThumbnail)
