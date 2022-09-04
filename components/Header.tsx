import { Button, chakra, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <chakra.header
      display='flex'
      justifyContent='end'
      background='blue.300'
      p={3}
      boxShadow='lg'>
      <Button
        onClick={toggleColorMode}
        background='whiteAlpha.400'
        boxShadow='2xl'>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </chakra.header>
  );
};
