
export default function PrimBtn({ link, text, className, clickHandler }) {
    return (
        <a
            className={`p-2 px-4 text-center cursor-pointer bg-secondary rounded-md text-primary text-base border-2 border-secondary hover:bg-primary hover:text-secondary duration-300 font-semibold ${className}`}
            href={link}
            onClick={clickHandler}
        >
            {text}
        </a>
    )
}
