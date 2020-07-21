import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
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
import Layout from "../components/layout"
import Error from "../components/error-fallback"
import { useDetail } from "../services/movie"
import { getImage, formatDate, formatDuration, formatCurrency } from "../utils"

const starColor = {
  filled: {
    light: "#141821",
    dark: "#e8eaea",
  },
  noFilled: {
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
    <Layout title={data ? data.title : null}>
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
          <Skeleton isLoaded={status !== "loading"} d="inline-block">
            <Text as="h2" fontSize="3xl" fontWeight="bold">
              {data ? data.title : "Lorem, ipsum dolor."}
            </Text>
          </Skeleton>

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

          <Box my="1" fontSize="sm" fontWeight="semibold">
            <Skeleton isLoaded={status !== "loading"} d="inline-block">
              <Badge rounded="full" px="2" mr="2">
                {data ? data.status : null}
              </Badge>

              <Text as="span">
                {data ? formatDate(data.release_date) : "Jan 1, 1970"}
              </Text>

              {data && data.runtime ? <span> &bull; </span> : ``}

              <Text as="span">
                {data ? formatDuration(data.runtime) : "0h 0m"}
              </Text>
            </Skeleton>
          </Box>

          <Box my="4">
            <Text as="span" fontSize="lg">
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
                <Skeleton w="150px" h="25px" />
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
              <Text as="span" pr="2" fontSize="sm">
                {data.vote_average.toString().length === 1
                  ? `${data.vote_average}.0`
                  : data.vote_average}
              </Text>

              {[...Array(5)].map((_, index) => {
                const averageDivided = Math.round(data.vote_average) / 2
                const iconName =
                  index !== Math.floor(averageDivided) ? `star` : `half-star`

                const iconColor =
                  index < averageDivided
                    ? starColor.filled[colorMode]
                    : starColor.noFilled[colorMode]

                return (
                  <Icon
                    mr="2"
                    key={index}
                    name={iconName}
                    color={iconColor}
                    size="19px"
                    css={css`
                      --half-star-bg-color: ${starColor.noFilled[colorMode]};
                    `}
                  />
                )
              })}
              {data ? ` (${data.vote_count}) ` : 0}
              <Text as="span" fontSize="sm">
                vote
              </Text>
            </Box>
          )}

          <Box d="flex" flexDirection={{ xs: "column", md: "row" }}>
            <Box lineHeight="1.3">
              <Skeleton isLoaded={status !== "loading"}>
                <Text fontWeight="bold">
                  {data ? data.popularity : "000.000"}
                </Text>
              </Skeleton>
              <Text fontSize="sm">Popularity</Text>
            </Box>

            <Box lineHeight="1.3" mx={{ md: "10rem" }} my={{ xs: 5, md: 0 }}>
              <Skeleton isLoaded={status !== "loading"}>
                <Text fontWeight="bold">
                  {data ? formatCurrency(data.budget) : "$0.000.00"}
                </Text>
              </Skeleton>
              <Text fontSize="sm">Budget</Text>
            </Box>

            <Box lineHeight="1.3">
              <Skeleton isLoaded={status !== "loading"}>
                <Text fontWeight="bold">
                  {data ? formatCurrency(data.revenue) : "$0.000.00"}
                </Text>
              </Skeleton>
              <Text fontSize="sm">Revenue</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
