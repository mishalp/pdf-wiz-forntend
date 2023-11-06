import { saveAs } from 'file-saver'
import { useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export default function DownloadPdf() {
    const { state } = useLocation()
    const [loading, setLoading] = useState(false)

    const download = async() => {
        setLoading(true)
        saveAs(state, "New.pdf")
         setTimeout(()=>{setLoading(false)}, 3000)
    }

    return (
        <div className='p-4 pt-40 flex flex-col gap-4 items-center justify-center'>
            <p>Your PDF is Ready to Download</p>
            <button
                disabled={loading}
                className='p-6 px-8 bg-secondary disabled:opacity-80 duration-100 rounded-md text-primary font-medium text-3xl'
                onClick={download}
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
