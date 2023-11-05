import axios from "axios";

export const uploadsLoader = async () => {

    try {
        const token = localStorage.getItem('token');
        if (!token) return { pdfs: false }
        const res = await axios.get(`/api/pdf/my-uploads`, { headers: { 'Authorization': `Bearer ${token}` } })
        return { pdfs: res.data.pdfs }
    } catch (error) {
        console.log(error);
        return false
    }
}