import Image from 'next/image'
import { useQuery, gql } from '@apollo/client'
import { Button, chakra, Grid, Heading, Text } from '@chakra-ui/react'
import { Card } from 'components/Card'
import { CharacterResult } from 'utils/interfaces/characters'
import { FC } from 'react'

interface CharacterListProps {
  character: CharacterResult
}

export const CharacterList: FC<CharacterListProps> = ({ character }) => {
  return (
    <Card borderRadius='lg'>
      <Heading>{character.name}</Heading>
      <chakra.figure w='100%'>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          layout='responsive'
          style={{ borderRadius: '25px' }}
        />
      </chakra.figure>
    </Card>
  )
}
