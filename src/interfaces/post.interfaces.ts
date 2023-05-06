export interface IPost {
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface IPostsProps {
    posts: IPost[]
}

export interface IPostProps {
    post: IPost
}