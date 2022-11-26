import type { NextPage } from 'next'

import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { MainLayout } from 'layouts/main'
import Head from 'next/head'
import { CharacterData } from 'utils/interfaces/characters'
import { CharacterList } from 'components/Characters/CharacterList'
import Loader from 'components/Loader'

const GET_CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      name
      species
      type
      status
      gender
      origin {
        name
        id
        type
      }
      location {
        id
        name
        type
      }
      image
      episode {
        id
        name
        episode
      }
    }
  }
`

const Character: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { loading, error, data } = useQuery<CharacterData>(GET_CHARACTER, {
    variables: { id },
  })

  if (loading) return <Loader />
  if (error) return <h1>Error! {error.message}</h1>
  if (!data) return <h1>No data</h1>

  console.log({ data })
  return (
    <MainLayout>
      <Head>
        <title>Rick and Morty Project</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <Box
        w='100%'
        h='calc(100vh - 80px)'
        display='flex'
        justifyContent='center'
        alignItems='center'>
        <CharacterList character={data.character} type='individual' />
      </Box>
    </MainLayout>
  )
}

export default Character