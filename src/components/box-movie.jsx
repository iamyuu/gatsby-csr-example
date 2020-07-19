import React from "react"
import { Link } from "gatsby"
import {
  Box,
  Image,
  AspectRatioBox,
  Text,
  Skeleton,
  useColorMode,
} from "@chakra-ui/core"
import CircleBox from "./circle-box"
import { formatDate, getImage } from "../utils"

export default function MovieBox(props) {
  const { loading, id, poster_path, title, release_date, vote_average } = props
  const { colorMode } = useColorMode()

  const rating =
    vote_average && vote_average.toString().length === 1
      ? `${vote_average}.0`
      : vote_average

  return (
    <Box
      m="2"
      background={colorMode === "dark" ? "#222938" : "#e9eff4"}
      rounded="lg"
      overflow="hidden"
      shadow="md"
    >
      <Link to={`/movie/${id}`}>
        <Skeleton isLoaded={!loading}>
          <AspectRatioBox h={400}>
            <Image src={getImage(poster_path, 300)} alt={`Poster ${title}`} />
          </AspectRatioBox>
        </Skeleton>

        <Box p="6">
          <CircleBox float="right" fontSize="xs">
            {rating || "0.0"}
          </CircleBox>

          <Skeleton isLoaded={!loading} w="150px" mb="5px">
            <Text as="h4" fontWeight="semibold" lineHeight="1" isTruncated>
              {title || "Lorem, ipsum dolor."}
            </Text>
          </Skeleton>

          <Skeleton isLoaded={!loading} w="100px" mt="5px">
            <Text fontSize="sm">
              {formatDate(release_date) || "Jan 1, 1970"}
            </Text>
          </Skeleton>
        </Box>
      </Link>
    </Box>
  )
}
