
export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-3 py-20 justify-center h-full">
        <h2 className="text-center text-4xl font-bold font-poppins">Upload Your PDF</h2>
        <input
            type="file"
            className="mx-auto after:p-3 w-6/12 sm:w-4/12 md:w-3/12  after:flex after:justify-center after:items-center relative after:absolute after:left-0 after:h-full after:bg-secondary after:w-full after:content-['Seelct_PDF'] after:top-0 text-3xl  hover:after:bg-[#40484f]  p-5 px-12 cursor-pointer rounded-md text-primary border-2 border-secondary after:duration-300 font-semibold"
            name="" id="" />
    </div>
  )
}
