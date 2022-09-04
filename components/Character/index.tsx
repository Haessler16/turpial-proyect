import Image from 'next/image'
import { useQuery, gql } from '@apollo/client'
import { Button, chakra, Grid, Heading, Text } from '@chakra-ui/react'
import { Card } from 'components/Card'
import { CharactersData } from 'utils/interfaces/characters'

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        status
      }
    }
  }
`

export const Character = () => {
  const { loading, error, data } =
    useQuery<Partial<CharactersData>>(GET_CHARACTERS)
  // const { colorMode } = useColorMode();

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>`Error! ${error.message}`</h1>

  console.log({ data: data?.characters?.results })

  return (
    <chakra.main px={12}>
      <Grid
        templateColumns='repeat(auto-fit, minmax(min(100%, 25rem), 1fr))'
        gap={2}>
        {data?.characters?.results.map((character) => {
          return (
            <Card key={character.id} borderRadius='lg'>
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
        })}
      </Grid>

      <Button>next page</Button>
    </chakra.main>
  )
}
