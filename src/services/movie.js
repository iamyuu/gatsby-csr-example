import axios from "axios"
import { useQuery } from "react-query"
import { API_KEY, BASE_URL } from "../constants/api"

const http = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
})

export function useNowPlaying() {
  const getAllPopular = async () => {
    const { data } = await http.get("/movie/now_playing")
    return data
  }

  return useQuery("now_playing", getAllPopular)
}
