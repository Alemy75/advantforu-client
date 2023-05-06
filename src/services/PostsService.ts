import { IPost } from "@/interfaces/post.interfaces"
import axios from "axios"

axios.defaults.baseURL = process.env.API_URL

export const PostService = {
    async getPosts() {
        const { data } = await axios.get<IPost[]>('/posts')
        return data
    },
    async getPost(id: string) {
        const { data } = await axios.get<IPost[]>(`/posts`,{
            params: {
                id,
            }
        })
        return data[0]
    }
}