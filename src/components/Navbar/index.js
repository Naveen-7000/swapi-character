import React from 'react';
import { Flex, Img, useColorModeValue } from '@chakra-ui/react';
import FavoriteButton from '../Favorite';

const Navbar = () => {
  const colorMode = useColorModeValue('dark', 'light');
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="transparent"
      color={colorMode === 'dark' ? 'black' : 'white'}
    >
      <Flex align="center">
        <Img src={'https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254'} w={'100px'} h={'50'} />
      </Flex>
      <Flex align="center" justifyContent="center">
        <FavoriteButton />
      </Flex>
    </Flex>
  );
};

export default Navbar;
