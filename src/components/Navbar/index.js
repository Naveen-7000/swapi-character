import React from 'react';
import { Flex, Img, useColorModeValue } from '@chakra-ui/react';
import FavoriteButton from '../Favorite';
import logo from '../../Asset/star-wars-logo-983.png';

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
        <Img src={logo} w={'100px'} h={'50'} />
      </Flex>
      <Flex align="center" justifyContent="center">
        <FavoriteButton />
      </Flex>
    </Flex>
  );
};

export default Navbar;
