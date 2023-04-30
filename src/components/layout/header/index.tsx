import React, { FC } from 'react'

type Props = {}

const Header: FC<Props> = (props) => {
    return (
        <header className="header">
            <main className="container">
                <div className="header__wrap">
                    <article className="header__left">
                        <h1>Advant<span className="green">fo.r</span>u</h1>
                        <p className="big-p">
                            <span className="green bightml">❮ </span>
                            Разработка уникальных и продающих
                            сайтов для бизнеса, интернет магазинов, корпоративных систем
                            <span className="green bightml"> <b>/</b>❯</span>
                        </p>
                        <button className="button">
                            Узнать о стоимости и сроках
                        </button>

                    </article>
                    <svg className='header__img' width="473" height="473" viewBox="0 0 473 473" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="236.5" cy="236.5" r="236.5" fill="#00A775" />
                        <path d="M363.177 135.403H107.805V291.251H363.177V135.403Z" fill="#195443" />
                        <path d="M357.562 140.303V287.066H113.438V140.303H357.562ZM361.922 122.866H109.078C101.885 122.866 96 128.751 96 135.944V291.425C96 298.618 101.885 304.504 109.078 304.504H361.922C369.115 304.504 375 298.618 375 291.425V135.944C375 128.751 369.115 122.866 361.922 122.866Z" fill="#1A1A1A" />
                        <path d="M257.297 304.512H213.703V343.38H257.297V304.512Z" fill="#494949" />
                        <path d="M297.028 334.697H173.919V352.134H297.028V334.697Z" fill="#1A1A1A" />
                        <g opacity="0.35">
                            <path d="M113.438 140.303H187.547L113.438 185.536V140.303Z" fill="white" />
                        </g>
                        <path d="M214.191 244.301L158.871 220.246V206.923L214.191 182.982V198.667L175.602 213.419L214.191 228.72V244.301Z" fill="white" />
                        <path d="M219.309 254.868L239.293 171.421H250.906L230.705 254.868H219.309Z" fill="white" />
                        <path d="M256.024 244.353V228.773L294.665 213.576L256.024 198.553V183.086L311.397 207.028V220.237L256.024 244.353Z" fill="white" />
                    </svg>
                </div>
            </main>
        </header>
    )
}

export default Header