import React from 'react';
import { useColorModeValue, IconButton, Box, Text } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

const FavoriteButton = () => {
  const colorMode = useColorModeValue('dark', 'light');
  const handleFavorite = () => {};
  return (
    <Box position="relative">
      <IconButton
        mx={2}
        size="md"
        fontSize="lg"
        aria-label={`Visit your favorite heros`}
        variant="ghost"
        marginLeft="2"
        border="2px"
        borderColor={colorMode === 'dark' ? 'blackAlpha.800' : 'whiteAlpha.600'}
        borderRadius="6px"
        onClick={handleFavorite}
        icon={<FaHeart />}
      />
      <Box
        position="absolute"
        bottom={-2}
        left={1}
        bg={'red.400'}
        borderRadius={'2px'}
        padding={'1px 5px'}
      >
        <Text fontSize={'12px'} fontWeight={'semibold'}>
          5
        </Text>
      </Box>
    </Box>
  );
};

export default FavoriteButton;
