import Post from '@/components/screens/posts/post'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { IPostProps, IPostsProps } from '@/interfaces/post.interfaces';
import { PostService } from '@/services/PostsService';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
    id: string
}

const UserPage: NextPage<IPostProps> = ({ post }) => {
    return (
        <>
            <Post post={post} />
        </>
    )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const posts = await PostService.getPosts()
    return {
        paths: posts.map(post => ({
            params: {
                id: post.id.toString()
            }
        })),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<IPostProps> = async ({params}) => {
    const post = await PostService.getPost(String(params?.id))
    return {
        props: {
            post: post
        },
        redirect: 60
    }
}

export default UserPage