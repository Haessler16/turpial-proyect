import { FC } from 'react'
import NextLink from 'next/link'
import { Card } from 'components/Card'
import { Result } from 'utils/interfaces/location'
import { Heading, Text, Link } from '@chakra-ui/react'

export const LocationCard: FC<{ location: Result }> = ({ location }) => {
  return (
    <Card w='80%' borderRadius='lg' border='2px' p={3}>
      {/* <Heading>{location.name}</Heading> */}
      <NextLink href={`/locations/${location.id}`}>
        <Link>
          <Heading>{location.type}</Heading>
        </Link>
      </NextLink>

      <Text>{location.name}</Text>
      <Text>{location.dimension}</Text>
      {/* <Text>{location.type}</Text> */}
    </Card>
  )
}
