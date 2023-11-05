import Loader from '../loader/Loader'

export default function LoaderFull() {
    return (
        <div
            className="fixed flex items-center justify-center left-0 top-0 bg-[rgba(0,0,0,0.5)] w-screen h-screen"
        >
            <Loader className='bg-white rounded-3xl' />
        </div>
    )
}
