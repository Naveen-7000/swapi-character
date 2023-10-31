import { Card, CardBody, Text, Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroCards = ({ name, age, gender, id }) => {
  const [bgColor, setBgColor] = useState('gray.600');
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setBgColor('white');
  };
  const handleMouseLeave = () => {
    setBgColor('gray.600');
  };
  const handleHeroClick = (e, id) => {
    e.preventDefault();
    navigate(`/heros/${id}`);
  };
  return (
    <Card
      bg={'gray.900'}
      color={'gray.200'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={e => handleHeroClick(e, id)}
      borderRadius={'8px'}
      cursor={'pointer'}
      border={'1px'}
      borderColor={'gray.400'}
    >
      <CardBody lineHeight={'1.5rem'}>
        <Flex
          justifyContent={'space-between'}
          align={'flex-start'}
          flexDirection={'column'}
          gap={'6px'}
        >
          <Text fontSize="3xl" fontWeight="medium" color={'gray.100'}>
            {name}
          </Text>
          <Text fontSize="xl" fontWeight="medium">
            Age - {age}
          </Text>
          <Text fontSize="xl" fontWeight="medium">
            Gender - {gender}
          </Text>
          <Flex justifyContent={'space-between'} align={'center'} mt={'6px'}>
            <Box w={'65px'} h={'4px'} bg={bgColor} borderRadius={'6px'} />
            <Box
              w={'10px'}
              h={'4px'}
              bg={bgColor}
              borderRadius={'6px'}
              ml={'5px'}
            />
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default HeroCards;
