import NextLink from 'next/link'
import { Button, chakra, Heading, Link, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <chakra.header
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      background='blue.300'
      boxShadow='lg'
      p={3}
      mb={3}>
      <Heading>Rick and Morty</Heading>

      <NextLink href='/' passHref>
        <Link fontSize='lg' fontWeight='bold'>
          Characters
        </Link>
      </NextLink>

      <NextLink href='/locations' passHref>
        <Link fontSize='lg' fontWeight='bold'>
          Location
        </Link>
      </NextLink>

      <NextLink href='/episodes' passHref>
        <Link fontSize='lg' fontWeight='bold'>
          Episode
        </Link>
      </NextLink>

      <Button
        onClick={toggleColorMode}
        background='whiteAlpha.400'
        boxShadow='2xl'>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </chakra.header>
  )
}
