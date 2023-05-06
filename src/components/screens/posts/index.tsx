import PostCard from '@/components/UI/postcard'
import Layout from '@/components/layout'
import { IPostsProps } from '@/interfaces/post.interfaces'
import Link from 'next/link'
import React from 'react'


const Posts: React.FC<IPostsProps> = ({ posts }) => {
	return (
		<Layout>
			<section className='min-h-[90vh]'>
				<div className="container">
					<h2 className="mt-8 mb-0">Блок Advant<span className='green'>fo.r</span>u</h2>
					<span className='text-xs'>
						<Link className='a' href={`/`}>Главная </Link>
						/ Блог
					</span>



					<section className="mt-8 mb-0 flex justify-between flex-wrap">
						{
							posts?.map(post => (
								<PostCard post={post} />
							))
						}
					</section>
				</div>
			</section>
		</Layout>
	)
}

export default Posts



