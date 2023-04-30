import React, { FC } from 'react'
import { StringMappingType } from 'typescript'

interface Props {
    id: number
    title: string
    description: string
    price: number
}

const Product: FC<Props> = (props) => {
    return (
        <article className="products__item">
            <div className="top">
                <h3>{props.title}:</h3>
            </div>
            <div className="text">
                {props.description}
                <div className="bottom">
                    <span className="price underline">От {props.price} р.</span>
                    <a className="a more" href="">Подробнее</a>
                </div>
            </div>
        </article>
    )
}

export default Product