import { Heading, Flex } from '@chakra-ui/core';
import Head from 'next/head';
import Checkout from '../components/checkout';

const Index = () => {
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <Flex flexDirection="column" alignItems="center" margin={4}>
                <Heading as="h1" size="2xl">
                    This is the home page
                </Heading>
                <Checkout></Checkout>
            </Flex>
        </>
    );
};

export default Index;
