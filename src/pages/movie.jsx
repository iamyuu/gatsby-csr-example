import React from "react"
import { Link } from "gatsby"
import {
  Box,
  Text,
  Icon,
  Badge,
  Image,
  AspectRatioBox,
  Skeleton,
  useColorMode,
} from "@chakra-ui/core"
import Error from "../components/error-fallback"
import { useDetail } from "../services/movie"
import { getImage, formatDate, formatDuration, formatCurrency } from "../utils"

const starColor = {
  fill: {
    light: "#141821",
    dark: "#e8eaea",
  },
  noFill: {
    light: "#e9eff4",
    dark: "#2d313a",
  },
}

export default function Movie({ movieId }) {
  const { colorMode } = useColorMode()
  const { status, error, data } = useDetail(movieId)

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
            />
          </AspectRatioBox>
        </Skeleton>
      </Box>

      <Box w={{ md: "75%" }} pl={{ md: 6, sm: 0 }} mt={{ xs: 5, md: 0 }}>
        {/* TODO: in mobile view move to top (before image) */}
        <Box mb="6">
          <Link to="/">
            <Icon name="arrow-back" fontSize="3xl" />
          </Link>

          <Icon
            size={25}
            w={30}
            mr="2"
            fontSize="2xl"
            float="right"
            cursor="pointer"
            name="bookmark-add"
            onClick={() => alert(`TODO: user can add to watch list`)}
            color={colorMode === "dark" ? "white" : "#141821"}
          />
        </Box>

        <Skeleton isLoaded={status !== "loading"} d="inline-block">
          <Text as="h2" fontSize="3xl" fontWeight="bold">
            {data ? data.title : "Lorem, ipsum dolor."}
          </Text>
        </Skeleton>

        <Box my="1" fontSize="sm" fontWeight="semibold">
          <Skeleton isLoaded={status !== "loading"} d="inline-block" mr="2">
            <Badge rounded="full" px="2">
              {data ? data.status : null}
            </Badge>
          </Skeleton>

          <Skeleton isLoaded={status !== "loading"} d="inline-block">
            {data ? formatDate(data.release_date) : "Jan 1, 1970"}
          </Skeleton>

          {data && data.runtime ? <span> &bull; </span> : ``}

          <Skeleton isLoaded={status !== "loading"} d="inline-block">
            {data ? formatDuration(data.runtime) : "0h 0m"}
          </Skeleton>
        </Box>

        <Box my="4">
          <Text as="span" fontSize="lg" fontWeight="semibold">
            Genre:
          </Text>

          <Box d="inline-block" ml="2">
            {data ? (
              data.genres.map((genre, index) =>
                data.genres.length <= index + 1
                  ? `${genre.name}`
                  : `${genre.name}, `
              )
            ) : (
              <>
                <Skeleton d="inline-block" w="50px" h="20px" />,
                <Skeleton d="inline-block" w="50px" h="20px" ml="2" />,
                <Skeleton d="inline-block" w="50px" h="20px" ml="2" />
              </>
            )}
          </Box>
        </Box>

        <Box mb="6">
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

        {data && (
          <Box mb="6">
            {[...Array(5)].map((_, index) => (
              <Icon
                key={index}
                name="star"
                mr="2"
                color={
                  // TODO: if has a decimal, only fill half
                  index < Math.round(data.vote_average) / 2
                    ? starColor.fill[colorMode]
                    : starColor.noFill[colorMode]
                }
              />
            ))}
            {data ? ` ${data.vote_count} ` : 0}
            <Text as="span" fontSize="sm">
              vote
            </Text>
          </Box>
        )}

        <Box d="flex" flexDirection={{ xs: "column", md: "row" }}>
          <Box lineHeight="1.3">
            <Text fontWeight="bold">{data ? data.popularity : "000.000"}</Text>
            <Text fontSize="sm">Popularity</Text>
          </Box>

          <Box lineHeight="1.3" mx={{ md: "10rem" }} my={{ xs: 5, md: 0 }}>
            <Text fontWeight="bold">
              {data ? formatCurrency(data.budget) : "$0.000.00"}
            </Text>
            <Text fontSize="sm">Budget</Text>
          </Box>

          <Box lineHeight="1.3">
            <Text fontWeight="bold">
              {data ? formatCurrency(data.revenue) : "$0.000.00"}
            </Text>
            <Text fontSize="sm">Revenue</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
