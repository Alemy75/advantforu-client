import React from 'react'
import Product from '../product'

type Props = {}

let products = [
    {
        id: 1,
        title: 'Сайт визитка',
        description: 'Небольшой сайт, состоящий из нескольких основных разделов. Кратко представляет компанию, товар и/или услуги.',
        price: 1337
    },
    {
        id: 2,
        title: 'Промо-сайт',
        description: 'Имиджевый сайт, формирует положительное впечатление о товаре, услуге или компании, отличается ярким дизайном и минимумом текста.',
        price: 1337
    },
    {
        id: 3,
        title: 'Посадочная страница',
        description: 'Страница «захвата» клиента, служит для увеличения уровня продаж товаров или услуг компании.',
        price: 1337
    },
    {
        id: 4,
        title: 'Интернет магазин',
        description: 'Продажа ваших товаров или услуг в режиме онлайн, позволяет клиентам совершать покупку прямо на сайте.',
        price: 1337
    },
    {
        id: 5,
        title: 'Корпоративный сайт',
        description: 'Представительство компании в интернете, в полном объеме информирует о вашей фирме, предлагаемых товарах и/или услугах.',
        price: 1337
    },
    {
        id: 6,
        title: 'Веб приложение',
        description: 'Разработка сложного полноценного веб приложения по вашим требованиям.',
        price: 1337
    },
]

const Products = (props: Props) => {
    return (
        <section className="products">
            <div className="container">
                <h2 className="underline">Наши услуги:</h2>
                <p className="big-p">Мы поможем создать вам:</p>
                <div className="products__wrap">
                    {
                        products.map(product => <Product
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Products