import Layout from '@/components/layout'
import Link from 'next/link'
import React from 'react'

const Posts = () => {
	return (
		<Layout>
			<section className='min-h-[90vh]'>
				<div className="container">
					<h2 className="mt-8 mb-0">Посты</h2>
					<span className='text-xs'>
						<Link className='a' href={`/`}>Главная </Link>
						/ Посты
					</span>
					
				</div>
			</section>
		</Layout>
	)
}

export default Posts