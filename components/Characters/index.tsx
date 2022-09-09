import { useQuery, gql } from '@apollo/client'
import { Button, Center, chakra, Grid, Input } from '@chakra-ui/react'

import { CharacterResult, CharactersData } from 'utils/interfaces/characters'
import { useCallback, useState } from 'react'
import { useDebounce } from 'hooks/useDebounds'
import { useSearch } from 'hooks/useSearch'
import { CharacterList } from './CharacterList'

const GET_ALL_CHARACTERS = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      info {
        next
        prev
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`

export const Characters = () => {
  const { loading, error, data, refetch } = useQuery<Partial<CharactersData>>(
    GET_ALL_CHARACTERS,
    { variables: { page: 1 } },
  )

  const [inputValue, setInputValue] = useState('')
  // const [nextPage, setNextPage] = useState('')
  // const [prevPage, setPrevPage] = useState('')

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
  if (error) return <h1>Error! {error.message}</h1>

  return (
    <chakra.main px={12}>
      <Center my={6}>
        <Input
          w='50%'
          h='50px'
          type='search'
          variant='filled'
          placeholder='Search a Character'
          name='search_character'
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Center>

      <Grid
        id='characters_grid'
        templateColumns='repeat(auto-fit, minmax(min(100%, 25rem), 1fr))'
        gap={2}>
        {charactersFiltered.map((character) => {
          return <CharacterList key={character.id} character={character} />
        })}
      </Grid>

      <Center my={6} gap={8}>
        <Button onClick={() => refetch({ page: data?.characters?.info.prev })}>
          Prev page
        </Button>
        <Button onClick={() => refetch({ page: data?.characters?.info.next })}>
          Next page
        </Button>
      </Center>
    </chakra.main>
  )
}
