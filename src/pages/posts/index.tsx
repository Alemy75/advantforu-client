import Posts from '@/components/screens/posts'
import { GetServerSideProps, NextPage } from 'next'

export type TPost = {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface Props {
    data: TPost[] | undefined;
    error?: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return { props: { data } }
    } catch (error) {
        return { props: { data: undefined, error: 'Failed to fetch data' } }
    }
}

const UsersPage: NextPage<Props> = ({ data, error }) => {
    console.log(data)

    return <Posts data={data} error={error} />
}

export default UsersPage