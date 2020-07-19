import React from "react"
import {
  Box,
  Text,
  Icon,
  Image,
  AspectRatioBox,
  Skeleton,
  useColorMode,
} from "@chakra-ui/core"
import Error from "../components/error-fallback"
import CircleBox from "../components/circle-box"
import {
  useDetail,
  // useCredit
} from "../services/movie"
import { getImage, formatDate, formatDuration } from "../utils"

// function find(items, value, key = "job") {
//   if (!value || items.length < 1) return {}

//   return items.find(item => item[key] === value)
// }

export default function Movie({ movieId }) {
  const { colorMode } = useColorMode()
  const { status, error, data } = useDetail(movieId)
  // const { status: statusCredit, data: credit } = useCredit(movieId)

  if (status === "error") {
    const isNotFound = error.message.includes(404)

    return (
      <Error
        icon={isNotFound ? "info" : "warning"}
        title={isNotFound ? "Not Found" : "Oops! something went wrong"}
        message={
          isNotFound ? "Page you are looking for was not found" : error.message
        }
      />
    )
  }

  return (
    <Box m="2" p="4" d={{ md: "flex" }}>
      <Box rounded="lg" overflow="hidden" shadow="md" w={{ md: 1 / 4 }}>
        <Skeleton isLoaded={status !== "loading"}>
          <AspectRatioBox h={450}>
            <Image
              alt={`Poster ${data ? data.title : null}`}
              src={data ? getImage(data.poster_path, 500) : null}
              fallbackSrc="https://mymdb.comyn.pw/img/posters/noposter.jpg"
            />
          </AspectRatioBox>
        </Skeleton>
      </Box>

      <Box w={{ md: "75%" }} pl={{ md: 6, sm: 0 }} mt="10">
        <CircleBox
          w={46}
          float="right"
          fontSize="xl"
          loading={status === "loading"}
        >
          {data
            ? data.vote_average.toString().length === 1
              ? `${data.vote_average}.0`
              : data.vote_average
            : "0.0"}
        </CircleBox>

        <CircleBox
          mr="2"
          float="right"
          fontSize="xl"
          cursor="pointer"
          onClick={() => alert(`TODO: add to watch list`)}
        >
          <Icon
            w={30}
            size={25}
            name="bookmark-add"
            color={colorMode === "dark" ? "white" : "#141821"}
          />
        </CircleBox>

        <Skeleton isLoaded={status !== "loading"} d="inline-block">
          <Text as="h2" fontSize="3xl" fontWeight="bold">
            {data ? data.title : "Lorem, ipsum dolor."}
          </Text>
        </Skeleton>

        <Box fontWeight="semibold" my="1">
          <Skeleton isLoaded={status !== "loading"} d="inline-block">
            {data ? formatDate(data.release_date) : "Jan 1, 1970"}
          </Skeleton>
          {` `} &bull; {` `}
          <Skeleton isLoaded={status !== "loading"} d="inline-block">
            {data && data.genres.length > 1
              ? data.genres.map((genre, index) =>
                  data.genres.length <= index + 1
                    ? `${genre.name}`
                    : `${genre.name}, `
                )
              : "Lorem, ipsum, dolor"}
          </Skeleton>
          {` `} &bull; {` `}
          <Skeleton isLoaded={status !== "loading"} d="inline-block">
            {data ? formatDuration(data.runtime) : "0h 0m"}
          </Skeleton>
        </Box>

        <Skeleton isLoaded={status !== "loading"} d="inline-block">
          <Text as="i" fontWeight={{ md: 300, xm: 500 }}>
            {data
              ? data.tagline
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          </Text>
        </Skeleton>

        <Box mt="4" mb="10">
          <Text fontSize="xl" fontWeight="semibold">
            Overview
          </Text>

          {status !== "loading" ? (
            <Text fontSize="md">{data.overview}</Text>
          ) : (
            <>
              <Skeleton my="10px" h="20px" />
              <Skeleton my="10px" h="20px" />
              <Skeleton my="10px" h="20px" w="85%" />
            </>
          )}
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
