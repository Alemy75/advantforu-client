import Post from '@/components/screens/posts/post'
import { NextPage, GetServerSideProps } from 'next'
import React from 'react'
import { TPost } from '.'
import { useRouter } from 'next/router';
import Head from 'next/head';

interface Props {
    data: TPost | undefined;
    error?: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        const data = await res.json()
        return { props: { data } }
    } catch (error) {
        return { props: { data: undefined, error: 'Failed to fetch data' } }
    }
}

const UserPage: NextPage<Props> = ({ data, error }) => {
    const { query } = useRouter()
    return (
        <>
            <Head>
                <title>
                    iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
                </title>
                <meta
                    name="description"
                    content="Оптимизация HTML кода. Быстро! Качественно! Надежно!"
                    key="desc"
                />
            </Head>
            <Post data={data} error={error} />
        </>
    )
}

export default UserPage