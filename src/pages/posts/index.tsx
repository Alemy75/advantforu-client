import Posts from '@/components/screens/posts'
import { IPostsProps } from '@/interfaces/post.interfaces'
import { PostService } from '@/services/PostsService'
import { GetStaticProps, NextPage } from 'next'  

const UsersPage: NextPage<IPostsProps> = ({posts}) => {
    return <Posts posts={posts}/>
}

export const getStaticProps: GetStaticProps<IPostsProps> = async () => {
    const posts = await PostService.getPosts()
    return {
        props: {
            posts
        },
        redirect: 60
    }
} 

export default UsersPage