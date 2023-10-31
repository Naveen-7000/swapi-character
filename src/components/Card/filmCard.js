import { Card, CardBody, Text, Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const FilmCards = ({ id }) => {
  const getData = async () => {
    const response = await axios.get(`https://swapi.dev/api/films/${id}`);
    return response.data;
  };
  const { data: film } = useQuery({
    queryKey: ['films', id],
    queryFn: getData,
  });

  return (
    <Card
      bg={'gray.700'}
      color={'gray.200'}
      borderRadius={'8px'}
      cursor={'pointer'}
      border={'1px'}
      borderColor={'gray.400'}
    >
      <CardBody lineHeight={'2rem'}>
        <Flex
          justifyContent={'space-between'}
          align={'flex-start'}
          flexDirection={'column'}
          gap={'6px'}
        >
          <Text fontSize="3xl" fontWeight="medium" color={'gray.100'}>
            {film?.title}
          </Text>
          <Text fontSize="lg" fontWeight="medium">
            Producer - {film?.producer}
          </Text>
          <Text fontSize="lg" fontWeight="medium">
            Director - {film?.director}
          </Text>
          <Text fontSize="lg" fontWeight="medium">
            Release Date - {film?.release_date}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default FilmCards;
