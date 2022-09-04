import { Button, chakra, Heading, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <chakra.header
      display='flex'
      justifyContent='space-between'
      background='blue.300'
      boxShadow='lg'
      p={3}
      mb={3}>
      <Heading>Turpial Proyect</Heading>

      <Button
        onClick={toggleColorMode}
        background='whiteAlpha.400'
        boxShadow='2xl'>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </chakra.header>
  )
}
