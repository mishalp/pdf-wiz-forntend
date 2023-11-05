
export default function Title({text, children}) {
    return (
        <h2 className="mx-auto flex gap-2 items-center text-4xl font-bold font-poppins text-secondary">
            {children}
            {text}
        </h2>
    )
}
