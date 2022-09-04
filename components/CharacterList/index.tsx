import { useQuery, gql } from '@apollo/client';
import { CharactersData } from 'utils/interfaces/characters';
import { Button, Text } from '@chakra-ui/react';

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
`;

export const CharacterList = () => {
  const { loading, error, data } =
    useQuery<Partial<CharactersData>>(GET_CHARACTERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log({ data: data?.characters?.results });
  return (
    <>
      {data?.characters?.results.map((character) => {
        return <Text key={character.id}>{character.name}</Text>;
      })}
      <Button>next page</Button>
    </>
  );
};
