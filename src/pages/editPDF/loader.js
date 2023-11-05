import axios from "axios";

export const editLoader = async ({ params }) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${import.meta.env.VITE_SERVER}/pdf/get/${params.id}`, { headers: { 'Authorization': `Bearer ${token}`} })
    return { pdf: res.data, id: params.id }
  } catch (error) {
    console.log(error);
  }
}