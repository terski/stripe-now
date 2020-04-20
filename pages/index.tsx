import { Heading, Flex, Text } from '@chakra-ui/core';
import Head from 'next/head';
import Checkout from '../components/checkout';

const Index = () => {
    return (
        <>
            <Head>
                <title>Matt's Muffins</title>
            </Head>
            <Flex flexDirection="column" alignItems="center" margin={6}>
                <Heading as="h1" size="xl">
                    Matt's Muffins
                </Heading>
                <Text textAlign="center" m={4}>
                    Three muffins delivered to your front door each week for $19
                    per month.
                </Text>
                <Checkout></Checkout>
            </Flex>
        </>
    );
};

export default Index;
