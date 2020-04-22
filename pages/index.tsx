import { Heading, Flex, Text } from '@chakra-ui/core';
import Head from 'next/head';
import Checkout from '../components/checkout';

const Index = () => {
    return (
        <>
            <Head>
                <title>Matt's Moon Cakes</title>
            </Head>
            <Flex flexDirection="column" alignItems="center" margin={6}>
                <Heading as="h1" size="xl">
                    Matt's Moon Cakes
                </Heading>
                <Text textAlign="center" m={4}>
                    Three moon cakes delivered to your front door for $19 per
                    month.
                </Text>
                <Text textAlign="center" fontSize="6xl">
                    🥮 🥮 🥮
                </Text>
                <Checkout></Checkout>
            </Flex>
        </>
    );
};

export default Index;
