import React, { FC } from 'react'
import Layout from "@/components/layout"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TPost } from '@/pages/posts';


interface Props {
	data: TPost | undefined;
	error?: string;
};

const Post: FC<Props> = ({data, error}) => {
    const { query } = useRouter()
    
    return (
        <Layout>
            <section className='min-h-[90vh]'>
                <div className="container">
                    <h2 className="mt-8 mb-0">Пост {query.id}</h2>
                    <span className='text-xs'>
                        <Link className='a' href={`/`}>Главная </Link>
                        /
                        <Link className='a' href={`/posts`}> Блог </Link>
                        / {data?.title}
                    </span>
                    <div>
                        <p className="mt-8 mb-0">{data?.title}</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Post