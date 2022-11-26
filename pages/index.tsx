import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/Header'
import { Box } from '@chakra-ui/react'
import { Characters } from 'components/Characters'
import { MainLayout } from 'layouts/main'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Rick and Morty Project</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <Box w='100%'>
        <Characters />
      </Box>
    </MainLayout>
  )
}

export default Home
