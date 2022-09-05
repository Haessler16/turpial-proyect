import Image from 'next/image'
import { useQuery, gql } from '@apollo/client'
import {
  Button,
  Center,
  chakra,
  Grid,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import { Card } from 'components/Card'
import { CharacterResult, CharactersData } from 'utils/interfaces/characters'
import { ChangeEvent, useCallback, useState } from 'react'
import { useDebounce } from 'hooks/useDebounds'
import { useSearch } from 'hooks/useSearch'
import { CharacterList } from './CharacterList'

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

  const [inputValue, setInputValue] = useState('')
  const [page, setPage] = useState('')

  const searchTerm = useDebounce(inputValue, 800)

  const filterByaName = useCallback(
    (item: CharacterResult) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    [searchTerm],
  )

  const charactersFiltered = useSearch({
    collection: data?.characters?.results,
    filterFuntion: filterByaName,
    term: searchTerm,
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>`Error! ${error.message}`</h1>

  // console.log({ inputValue })
  // console.table(data?.characters?.results)

  return (
    <chakra.main px={12}>
      <Center my={6}>
        <Input
          w='50%'
          h='50px'
          type='search'
          variant='filled'
          placeholder='Search a Character'
          name='Search Character'
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Center>

      <Grid
        templateColumns='repeat(auto-fit, minmax(min(100%, 25rem), 1fr))'
        gap={2}>
        {charactersFiltered.map((character) => {
          return <CharacterList key={character.id} character={character} />
        })}
      </Grid>

      <Center my={6} gap={8}>
        <Button>prev page</Button>
        <Button>next page</Button>
      </Center>
    </chakra.main>
  )
}
