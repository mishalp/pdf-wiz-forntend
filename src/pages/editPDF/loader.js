import axios from "axios";

export const editLoader = async ({ params }) => {
    try {
        const res = await axios.get(`/api/pdf/get/${params.id}`)
        return {pdf: res.data, id: params.id}
      } catch (error) {
        console.log(error);
      }
}