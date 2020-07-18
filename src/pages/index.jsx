import React from "react"
import { SimpleGrid } from "@chakra-ui/core"
import MovieBox from "../components/movie-box"
import { useNowPlaying } from "../services/movie"

export default function Home() {
  const { status, error, data } = useNowPlaying()

  if (status === "loading") {
    return [...Array(10)].map(value => <MovieBox key={value} loading />)
  }

  if (status === "error") {
    return <span>{error.message}</span>
  }

  return (
    <SimpleGrid m="2" minChildWidth="240px">
      {data.results.map(movie => (
        <MovieBox key={movie.id} {...movie} />
      ))}
    </SimpleGrid>
  )
}
