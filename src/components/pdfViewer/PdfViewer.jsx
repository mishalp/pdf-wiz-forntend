import { useRef, useState } from "react";
import { Document, Page } from "react-pdf";

export default function PdfViewer({ pdf }) {

    const [numPages, setNumPages] = useState(0);
    const [selected, setSelected] = useState([]);

    const ref = useRef()

    function isSelected(index){
        let flag = false;
        selected.forEach(n=>{
            if(n === index) flag = true;
        })
        return flag
    }

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function onPageClick( index){
        let temp = selected;
        let flag = false;
        let pos;
        temp.forEach((n, i)=>{
            if(n === index){
                flag = true;
                pos = i
            }
        })
        if(flag){
            temp.splice(pos, 1)
            setSelected([...temp])
            console.log(index);
            console.log('removed');
        }else{
            temp.push(index)
            setSelected([...temp])
        }

    }


    return (
        <Document
            inputRef={ref}
            className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 justify-items-center"
            file={pdf}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            {Array.from(new Array(numPages), (el, index) => (
                <div onClick={()=>onPageClick(index)} id={index} className="border-2 flex flex-col relative border-black p-1" key={`page_${index + 1}`}>
                    <Page
                    className=""
                    width={330}
                    height={200}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    pageNumber={index + 1}
                />
                <p className="mx-auto bg-white">{index + 1}</p>
                <div id="box" className="absolute flex items-center justify-center top-2 left-2 border-black border-4 w-8 h-8">
                    {isSelected(index) &&
                        <div className="border-black border-4 w-5 -translate-y-0.5 border-t-0 border-r-0 -rotate-45 h-3"></div>}
                </div>
                </div>
            ))}
        </Document>
    );
}