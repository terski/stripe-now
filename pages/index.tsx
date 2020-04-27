import { Heading, Flex, Text, Box, Link, Icon } from '@chakra-ui/core';
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
                <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    width="100%"
                    maxW={500}
                    px={4}
                    fontSize="xs"
                    color="gray.500"
                >
                    <Text>
                        <span>Your card won't be charged</span>
                    </Text>
                    <Link
                        textAlign="right"
                        href="https://github.com/terski/stripe-now"
                    >
                        View on github
                    </Link>
                </Flex>
            </Flex>
        </>
    );
};

export default Index;
