import { useContext, useEffect, useRef, } from "react";
import { Page } from "react-pdf";
import { StoreContext } from "../../../store/StoreContext";

function PdfPage({ index, numPages }) {

    const {selected, setSelected} = useContext(StoreContext)

    const canvas = useRef()
    const onPageClick = (index) => {
        let temp = selected
        let flag = false;
        let pos;
        temp.forEach((n, i) => {
            if (n === index) {
                flag = true;
                pos = i
            }
        })
        if (flag) {
            temp.splice(pos, 1)
        } else {
            temp.push(index)
        }
        temp.sort(((a, b)=>a-b))
        setSelected([...temp])
    }

    const isSelected = (index) => {
        let flag = false;
        selected.forEach(n => {
            if (n === index) flag = true;
        })
        return flag
    }

    return (
        <div  className={`border-2 flex flex-col relative ${isSelected(index) && 'bg-secondary'} border-[#969696] p-1`} key={`page_${index + 1}`}>
            <div onClick={() => onPageClick(index)} className="flex flex-col">
            <Page
                className=""
                width={300}
                height={200}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                pageNumber={index + 1}
                canvasRef={canvas}
                onLoadSuccess={()=>{
                    let prev = canvas.current.className
                    canvas.current.className = prev + " !w-36 !h-auto sm:!w-72"
                }}

            />
            <p className={`mx-auto ${isSelected(index)? 'text-primary': 'text-secondary'}`}>{index + 1}</p>
            <div id="box" className={`absolute flex items-center justify-center top-2 left-2 border-secondary ${isSelected(index) && 'bg-secondary'} rounded-md border-[3px] w-8 h-8`}>
                {isSelected(index) &&
                    <div className="border-primary border-4 w-5 -translate-y-0.5 border-t-0 border-r-0 -rotate-45 h-3"></div>}
            </div>
            </div>
        </div>
    )
}

export default PdfPage
