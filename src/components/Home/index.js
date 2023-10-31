import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Flex,
  Grid,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import HeroCards from '../Card';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import LoadingPage from '../Skeleton';
const Home = () => {
  const [pages, setPages] = useState(1);
  const getHeroData = async pageNumber => {
    const response = await axios.get(
      `https://swapi.dev/api/people/?page=${pageNumber}`
    );
    return response.data;
  };

  const { data: heros, isLoading } = useQuery({
    queryKey: ['heros', pages],
    queryFn: () => getHeroData(pages),
  });

  if (isLoading) {
    return (
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} padding="1rem">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(card => (
          <LoadingPage key={card} />
        ))}
      </SimpleGrid>
    );
  }
  return (
    <Box padding="1rem">
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        gap={6}
      >
        {heros?.results?.map((hero, index) => {
          const parts = hero?.url.split('/');
          const lastPart = parts[parts.length - 2];
          return (
            <HeroCards
              key={index}
              name={hero?.name}
              age={hero?.age}
              gender={hero?.gender}
              id={lastPart}
            />
          );
        })}
      </Grid>
      <Flex align={'center'} justifyContent={'center'} mt={'16px'}>
        <IconButton
          icon={<FaAngleLeft />}
          onClick={() => setPages(pages - 1)}
          isDisabled={!heros.previous}
        />
        <Flex
          align={'center'}
          justifyContent={'space-evenly'}
          gap={'25px'}
          mx={'25px'}
        >
          <Text
            border={'1px'}
            borderColor={'gray.500'}
            padding={'2px 5px'}
            borderRadius={'4px'}
          >
            {pages}
          </Text>
        </Flex>
        <IconButton
          icon={<FaAngleRight />}
          onClick={() => setPages(pages + 1)}
          isDisabled={!heros.next}
        />
      </Flex>
    </Box>
  );
};

export default Home;
