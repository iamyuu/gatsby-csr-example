import axios from "axios"
import { useQuery } from "react-query"
import { API_KEY, BASE_URL } from "../constants/api"

const fetcher = async (endpoint, params = {}) => {
  if (!endpoint) {
    throw new Error('fetcher require argument "endpoint"')
  }

  const options = {
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      ...params,
    },
  }

  const { data } = await axios.get(endpoint, options)
  return data
}

export function useNowPlaying() {
  return useQuery("now_playing", () => fetcher(`/movie/now_playing`))
}
