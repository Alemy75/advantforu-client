import Products from "@/components/UI/products"
import Layout from "@/components/layout"
import Header from "@/components/layout/header"
import { FC } from "react"

interface Props {

}

const Home: FC<Props> = () => {
  return (
    <Layout>
      <Header/>
      <Products/>
    </Layout>
  )
}

export default Home