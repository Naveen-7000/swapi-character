import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import Layout from '../Layout'
import HeroCards from '../Card'
import useFavorites from '../../hooks/useFavorites'

const FavoritePage = () => {
  const {favoriteCharacters} = useFavorites()
  return (
    <Layout>
    <Box padding={"16px"}>
      <Heading color={'gray.100'}>Favorite Characters</Heading>
      <Grid
       templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
       gap={6}
       mt={'1rem'}
      >
      {favoriteCharacters?.map((character, index) => {
          return (
            <HeroCards
              key={index}
              name={character?.data?.name}
              img={character?.id}
              gender={character?.data?.gender}
              id={character?.id}
            />
          );
        })}
      </Grid>
    </Box>
    </Layout>
  )
}

export default FavoritePage
