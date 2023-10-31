import React from 'react';
import { Flex, Skeleton } from '@chakra-ui/react';

const LoadingPage = () => {
  return (
    <Flex
      align="center"
      justifyContent="center"
      flexDirection="column"
      gap="5px"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <Skeleton height={'200px'} width={'160px'} />
      <Skeleton height="20px" mt="2" width="50%" />
      <Skeleton height="20px" width="80%" />
    </Flex>
  );
}

export default LoadingPage
