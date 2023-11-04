import { saveAs } from 'file-saver'
import { useLocation } from 'react-router-dom'

export default function DownloadPdf() {
    const { state } = useLocation()
    return (
        <div className='p-4 pt-40 flex flex-col gap-4 items-center justify-center'>
            <p>Your PDF is Ready to Download</p>
            <button
                className='p-6 px-8 bg-secondary rounded-md text-primary font-medium text-3xl'
                onClick={() => saveAs(state, "New.pdf")}
            >
                Download
            </button>
            <a
                href='/'
                className='p-2 rounded-md text-secondary font-medium text-xl'
            >
                Edit more PDF
            </a>

        </div>
    )
}
