import { useState } from "react";
import { Page } from "react-pdf";

function PdfPage({ index, selected }) {

    const [arr, setArr] = useState(selected.current.selected)

    const onPageClick = (index) => {
        let temp = arr
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
        selected.current.selected = temp
        setArr([...temp])
    }

    const isSelected = (index) => {
        let flag = false;
        arr.forEach(n => {
            if (n === index) flag = true;
        })
        return flag
    }

    return (
        <div onClick={() => onPageClick(index)} className="border-2 flex flex-col relative border-black p-1" key={`page_${index + 1}`}>
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
    )
}

export default PdfPage
