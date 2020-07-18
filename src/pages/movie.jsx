import React from "react"
import {
  Box,
  Text,
  Icon,
  Image,
  AspectRatioBox,
  useColorMode,
} from "@chakra-ui/core"
import {
  useDetail,
  // useCredit
} from "../services/movie"
import { getImage, formatDate, formatRuntime } from "../utils"

// function find(items, value, key = "job") {
//   if (!value || items.length < 1) return {}

//   return items.find(item => item[key] === value)
// }

export default function Movie({ movieId }) {
  const { colorMode } = useColorMode()
  const { status, error, data } = useDetail(movieId)
  // const { status: statusCredit, data: credit } = useCredit(movieId)

  if (status === "loading") {
    return <Box>Loading...</Box>
  }

  if (status === "error") {
    return (
      <Box
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Icon name="warning" size="3rem" mb="5" />
        <Text as="h4" fontSize="xl" fontWeight="semibold">
          Oops! something went wrong
        </Text>
        <Text fontSize="sm">{error.message}</Text>
      </Box>
    )
  }

  const { vote_average } = data
  const rating =
    vote_average && vote_average.toString().length === 1
      ? `${vote_average}.0`
      : vote_average

  return (
    <Box m="2" p="4" d={{ md: "flex" }}>
      <Box rounded="lg" overflow="hidden" shadow="md" w={{ md: 1 / 4 }}>
        <AspectRatioBox h={450}>
          <Image
            src={getImage(data.poster_path, 500)}
            alt={`Poster ${data.title}`}
          />
        </AspectRatioBox>
      </Box>

      <Box w={{ md: "75%" }} pl={{ md: 6, sm: 0 }} mt="10">
        <Box>
          <Text as="h2" fontSize="3xl" fontWeight="bold">
            {data.title}
          </Text>

          <Box fontWeight="semibold">
            {formatDate(data.release_date)}
            {` `} &bull; {` `}
            {data.genres.map((genre, index) => (
              <Box key={genre.id} d="inline-block" mr="1">
                {data.genres.length <= index + 1
                  ? `${genre.name}`
                  : `${genre.name},`}
              </Box>
            ))}
            {` `} &bull; {` `}
            {formatRuntime(data.runtime)}
          </Box>

          <Text as="i" fontWeight={{ md: 300, xm: 500 }}>
            {data.tagline}
          </Text>
        </Box>

        <Box>
          <Box
            background={colorMode === "dark" ? "#141821" : "white"}
            rounded="full"
            d="inline-block"
            p="2"
            my="4"
            mr="2"
            fontSize="xl"
            fontWeight="semibold"
          >
            {rating}
          </Box>

          <Icon
            name="heart-add"
            size={30}
            mx="2"
            color={colorMode === "dark" ? "white" : "#141821"}
          />
          <Icon
            name="bookmark-add"
            size={30}
            mx="2"
            color={colorMode === "dark" ? "white" : "#141821"}
          />
        </Box>

        <Box mb="10">
          <Text fontSize="xl" fontWeight="semibold">
            Overview
          </Text>
          <Text fontSize="md">{data.overview}</Text>
        </Box>

        {/* {statusCredit === "success" && (
          <Box d="flex" flexDirection={{ xs: "column", md: "row" }}>
            <Box lineHeight="1.3">
              <Text fontWeight="bold">{find(credit.crew, "Author").name}</Text>
              <Text fontSize="sm">Author</Text>
            </Box>

            <Box lineHeight="1.3" mx={{ md: "9rem" }} my={{ xs: 4, md: 0 }}>
              <Text fontWeight="bold">
                {find(credit.crew, "Director").name}
              </Text>
              <Text fontSize="sm">Director</Text>
            </Box>

            <Box lineHeight="1.3">
              <Text fontWeight="bold">
                {find(credit.crew, "Screenplay").name}
              </Text>
              <Text fontSize="sm">Screenplay</Text>
            </Box>
          </Box>
        )} */}
      </Box>
    </Box>
  )
}
