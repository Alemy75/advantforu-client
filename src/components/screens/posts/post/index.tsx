import React from 'react'
import Layout from "@/components/layout"
import { useRouter } from 'next/router'

const User = () => {
    const {query} = useRouter()
    
    return (
        <Layout>
            <h1 className="text-2xl">Пост: {query.id}</h1>
        </Layout>
    )
}

export default User