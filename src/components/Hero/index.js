import React from 'react';
import { Text, Flex, Box, Grid, Heading, Button, Img } from '@chakra-ui/react';
import Layout from '../Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import FilmCards from '../Card/filmCard';
import useFavorites from '../../hooks/useFavorites';

const Hero = () => {
  const params = useParams();
  const { favoriteCharacters, toggleFavorite } = useFavorites();

  const getData = async () => {
    const response = await axios.get(
      `https://swapi.dev/api/people/${params?.heroId}`
    );
    return response.data;
  };
  const { data: hero } = useQuery({
    queryKey: ['herodetails', params?.heroId],
    queryFn: getData,
  });

  const handleAddFavorite = () => {
    toggleFavorite(params.heroId, hero);
  };

  return (
    <Layout>
      <Box padding={'10px'} m={'16px'}>
        <Flex align={'center'} justifyContent={'space-between'}>
          <Heading>Personal Information</Heading>
          <Button onClick={handleAddFavorite}>
            {favoriteCharacters.some(favorite => favorite.id === params.heroId)
              ? 'Remove from Favorites'
              : 'Add to Favorites'}
          </Button>
        </Flex>
        <Flex
          justifyContent={'center'}
          align={'flex-start'}
          flexDirection={'row'}
          gap={'1.5rem'}
          mt={'16px'}
          color={'gray.200'}
        >
          <Img
            src={require(`../../static/assets/img/people/${params?.heroId}.jpg`)}
            height={'250px'}
            borderRadius={'8px'}
            border={'1px'}
            borderColor={'gray.400'}
            alt={`${hero?.name}`}
            objectFit={'contain'}
          />
          <Box lineHeight={'2rem'}>
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
          </Box>
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
