import React from "react"
import { SimpleGrid } from "@chakra-ui/core"
import BoxMovie from "../components/box-movie"
import Error from "../components/error-fallback"
import { useNowPlaying } from "../services/movie"

export default function Home() {
  const { status, error, data } = useNowPlaying()

  if (status === "error") {
    return <Error message={error.message} />
  }

  return (
    <SimpleGrid m="2" minChildWidth="240px">
      {status === "loading"
        ? [...Array(10)].map((_, index) => <BoxMovie key={index} loading />)
        : data.results.map(movie => <BoxMovie key={movie.id} {...movie} />)}
    </SimpleGrid>
  )
}
