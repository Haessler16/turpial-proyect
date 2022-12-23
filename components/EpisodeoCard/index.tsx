import { FC } from 'react'
import NextLink from 'next/link'

import { Heading, Text, Link } from '@chakra-ui/react'
import { Result } from 'utils/interfaces/episodes'

import { Card } from 'components/Card'

export const EpisodeoCard: FC<{ episode: Result }> = ({ episode }) => {
  return (
    <Card w='80%' borderRadius='lg' border='2px' p={3}>
      <NextLink href={`/episodes/${episode.id}`}>
        <Link>
          <Heading>{episode.episode}</Heading>
        </Link>
      </NextLink>

      <Text>{episode.name}</Text>
    </Card>
  )
}
