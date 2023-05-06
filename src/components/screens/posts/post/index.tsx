import React, { FC } from 'react'
import Layout from "@/components/layout"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { IPostProps } from '@/interfaces/post.interfaces'

const Post: FC<IPostProps> = ({post}) => {
    return (
        <Layout>
            <section className='min-h-[90vh]'>
                <div className="container">
                    <h2 className="mt-8 mb-0">Пост {post.id}</h2>
                    <span className='text-xs'>
                        <Link className='a' href={`/`}>Главная </Link>
                        /
                        <Link className='a' href={`/posts`}> Блог </Link>
                        / {post.title}
                    </span>
                    <div>
                        <p className="mt-8 mb-0">{post.title}</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Post