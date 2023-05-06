import { IPostProps } from '@/interfaces/post.interfaces'
import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'

const PostCard: FC<IPostProps> = ({ post }) => {
    return (
        <div key={post.id} className='w-[49.3%] border-hover shdw min-h-[200px] mb-4 transition-all hover:'>
            <Image
                src='https://assets.entrepreneur.com/content/3x2/2000/20160912191005-SEO-1300x867.jpeg'
                width="100"
                height={100}
                layout='responsive'
                alt={post.title}
            />
            <div className='px-4 py-4'>
                <h1 className='text-xl font-bold mb-2 truncate w-[100%]'>{post.title}</h1>
                <div className='mb-4'>Автор: <span className='font-thin'>Алексеев М. А.</span></div>
                <div className='flex justify-between'>
                    <span className='a inline w-[100px] truncate opacity-[0.7] font-thin italic' >{post.title}</span>
                    <Link className='a' href={`/posts/${post.id}`}>Подробнее..</Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard