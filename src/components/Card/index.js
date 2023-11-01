import { Card, CardBody, Text, Box, Flex,Img } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroCards = ({ name, id, img }) => {
  const [bgColor, setBgColor] = useState('gray.600');
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setBgColor('white');
    setFlag(true);
  };
  const handleMouseLeave = () => {
    setBgColor('gray.600');
    setFlag(false);
  };
  const handleHeroClick = (e, id) => {
    e.preventDefault();
    navigate(`/heros/${id}`);
  };
  return (
    <Card
      bg={"gray.900"}
      color={'gray.200'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={e => handleHeroClick(e, id)}
      borderRadius={'8px'}
      cursor={'pointer'}
      border={'1px'}
      borderColor={'gray.400'}
    >
          <Img
            src={require(`../../static/assets/img/people/${img}.jpg`)}
            width={'100%'}
            alt={`${name}`}
            borderTopRadius={"8px"}
          />
      <CardBody lineHeight={'2rem'}>
        <Flex
          justifyContent={'space-between'}
          align={'flex-start'}
          flexDirection={'column'}
          gap={'6px'}
        >
          <Flex
            justifyContent={'space-between'}
            align={'center'}
            my={'6px'}
          >
            <Box
              w={'45px'}
              h={'4px'}
              bg={bgColor}
              borderRadius={'6px'}
              boxShadow={flag && '0 0 6px 1px white'}
            />
            <Box
              w={'5px'}
              h={'4px'}
              bg={bgColor}
              borderRadius={'6px'}
              ml={'5px'}
              boxShadow={flag && '0 0 6px 1px white'}
            />
          </Flex>
          <Text fontSize="3xl" fontWeight="medium" color={'gray.100'}>
            {name}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default HeroCards;
