

export default function Input({ type, onChange, id, placeHolder, }) {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeHolder}
            onChange={onChange}
            className="p-2 text-lg rounded-md border-[rgba(0,0,0,0.4)] border-2 w-full"
        />
    )
}
