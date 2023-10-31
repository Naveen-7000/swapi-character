import React from 'react';
import { Text, Flex, Box, Grid, Heading } from '@chakra-ui/react';
import Layout from '../Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import FilmCards from '../Card/filmCard';

const Hero = () => {
  const params = useParams();
  const getData = async () => {
    const response = await axios.get(
      `https://swapi.dev/api/people/${params?.heroId}`
    );
    return response.data;
  };
  const { data: hero, isLoading } = useQuery({
    queryKey: ['herodetails', params?.heroId],
    queryFn: getData,
  });

  if (isLoading) {
    return (
      <Flex
        align="center"
        justifyContent="center"
        flexDirection="column"
        gap="5px"
        p="4"
        borderRadius="lg"
        boxShadow="md"
        bg= 'gray.800'
      >
        <Text>Loading...</Text>
      </Flex>
    );
  }
  return (
    <Layout>
      <Box padding={'10px'} m={'16px'}>
        <Heading>Personal Information</Heading>
        <Flex
          justifyContent={'space-between'}
          align={'flex-start'}
          flexDirection={'column'}
          gap={'6px'}
          mt={'16px'}
        >
          <Text fontSize="xl" fontWeight="medium" color={'gray.100'}>
            Name - {hero?.name}
          </Text>
          <Text fontSize="xl" fontWeight="medium">
            Birth Year - {hero?.birth_year}
          </Text>
          <Text fontSize="xl" fontWeight="medium">
            Gender - {hero?.gender}
          </Text>
          <Text fontSize="xl" fontWeight="medium">
            Height - {hero?.height}
          </Text>
          <Text fontSize="xl" fontWeight="medium">
            Mass - {hero?.mass}
          </Text>
          <Text fontSize="xl" fontWeight="medium">
            Skin Color - {hero?.skin_color}
          </Text>
        </Flex>
      </Box>
      <Text
        fontSize="2xl"
        fontWeight="medium"
        m={'16px'}
        borderBottom={'1px'}
        borderColor={'white'}
      >
        Movies
      </Text>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        gap={6}
        m={'16px'}
      >
        {hero?.films?.map((film, index) => {
          const parts = film.split('/');
          const lastPart = parts[parts.length - 2];
          return <FilmCards key={index} id={lastPart} />;
        })}
      </Grid>
    </Layout>
  );
};

export default Hero;
