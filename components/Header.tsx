import NextLink from 'next/link'
import {
  Button,
  chakra,
  Heading,
  Link,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react'
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

import { useMediaQuery } from '@chakra-ui/react'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isLessThan800] = useMediaQuery('(max-width: 760px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

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

      {!isLessThan800 && (
        <>
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
        </>
      )}

      {isLessThan800 && (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Menu
          </MenuButton>

          <MenuList>
            <MenuItem>
              <NextLink href='/' passHref>
                <Link fontSize='lg' fontWeight='bold'>
                  Characters
                </Link>
              </NextLink>
            </MenuItem>

            <MenuItem>
              <NextLink href='/locations' passHref>
                <Link fontSize='lg' fontWeight='bold'>
                  Location
                </Link>
              </NextLink>
            </MenuItem>

            <MenuItem>
              <NextLink href='/episodes' passHref>
                <Link fontSize='lg' fontWeight='bold'>
                  Episode
                </Link>
              </NextLink>
            </MenuItem>

            <MenuItem justifyContent='space-between'>
              <Text fontSize='lg' fontWeight='bold'>
                Theme:
              </Text>

              <Button
                onClick={toggleColorMode}
                background='whiteAlpha.400'
                boxShadow='2xl'>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </chakra.header>
  )
}
