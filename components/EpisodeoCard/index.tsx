import { FC } from 'react'

import { Result } from 'utils/interfaces/episodes'
import { Heading, Text } from '@chakra-ui/react'
import { Card } from 'components/Card'

export const EpisodeoCard: FC<{ episode: Result }> = ({ episode }) => {
  return (
    <Card w='80%' borderRadius='lg' border='2px' p={3}>
      <Heading>{episode.episode}</Heading>

      <Text>{episode.name}</Text>
    </Card>
  )
}
