import { useContext, useState } from "react"
import Input from "../../components/input/Input"
import PrimBtn from "../../components/primeryBtn/PrimBtn"
import LoaderFull from "../../components/loaderWrap/LoaderFull"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../../store/StoreContext"

export default function LogIn() {

    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onChangeInput = (e) => {
        setError("")
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }
    const { setUser } = useContext(StoreContext)

    const onSubmit = async () => {
        try {
            setLoading(true)
            if (data.email < 1) return setError("Email is empty")
            const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
            if (!emailRegex.test(data.email)) return setError("Enter a valid email")
            if (data.password.length < 6) return setError("Passwrod must be atleast 6 characters")

            const res = await axios.post(`${import.meta.env.VITE_SERVER}/user/sign-in`, data)
            localStorage.setItem('token', res.data.token)
            setUser(res.data.name)
            navigate("/")
        } catch (error) {
            console.log(error);
            setError(error.response.data.error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-10 items-center flex flex-col gap-4">
            <h2 className="text-4xl font-semibold">Log In</h2>
            <div className="flex flex-col gap-4 w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4 mt-4">
                <Input type='email' onChange={onChangeInput} placeHolder='Email' id='email' />
                <Input type='password' onChange={onChangeInput} placeHolder='Password' id='password' />
                <p className="text-red-600 text-center">{error}</p>
            </div>
            <PrimBtn clickHandler={onSubmit} text="Submit" />
            {loading && <LoaderFull />}
        </div>
    )
}
