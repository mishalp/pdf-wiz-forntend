import {useState, useEffect} from 'react'
import axios from 'axios';

const useVerify = () => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true)

        useEffect(()=>{
            const fetchData = async ()=>{
             const token = localStorage.getItem('token');
                try {
                    const res = await axios.get(`${import.meta.env.VITE_SERVER}/user/verify`,  { headers: {'Authorization': `Bearer ${token}`} });
                    setData(res.data.name)
                    setPending(false)
                } catch (error) {
                    console.log(error);
                    setPending(false)
                }
            }
            fetchData()
        }, [])
        return { data, pending }
}

export default useVerify