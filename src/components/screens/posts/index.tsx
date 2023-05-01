import Layout from '@/components/layout'
import { TPost } from '@/pages/posts';
import Link from 'next/link'
import React from 'react'

interface Props {
	data: TPost[] | undefined;
	error?: string;
};

const Posts: React.FC<Props> = ({ data, error }) => {
	return (
		<Layout>
			<section className='min-h-[90vh]'>
				<div className="container">
					<h2 className="mt-8 mb-0">Блог</h2>
					<span className='text-xs'>
						<Link className='a' href={`/`}>Главная </Link>
						/ Блог
					</span>
					<section className="mt-8 mb-0">
						<ul>
							{
								data?.map(post => (
									<li key={post.id}>
										<Link className='a' href={`/posts/${post.id}`}>{post.title}</Link>
									</li>
								))
							}
						</ul>
					</section>
				</div>
			</section>
		</Layout>
	)
}

export default Posts



