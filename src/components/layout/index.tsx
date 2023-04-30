import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <>
            <nav className="nav">
                <div className="container">
                    <div className="nav__wrap">
                        <span className="nav__btn">
                            <span className="first"></span>
                            <span className="second"></span>
                            <span className="third"></span>
                        </span>

                        <div>
                            <Link className='a mr-4' href={`posts/`}>Посты</Link>
                            <a className="a" href="tel:+79222645956">+7 (922) 264-59-56</a>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
            <footer className="footer">
                <section className="container footer__wrap">
                    <ul className="footer__contacts">
                        <li className="footer__item">
                            Почта:
                            <address>
                                <a className="a footer__address" href="">info@adfantfo.ru</a>
                            </address>
                        </li>
                        <li className="footer__item">
                            Телефон:
                            <address>
                                <a className="a footer__address" href="">+7 (922) 264-59-56</a>
                            </address>
                        </li>
                        <li className="footer__item">
                            What's App:
                            <address>
                                <a className="a footer__address" href="">+7 (922) 264-59-56</a>
                            </address>
                        </li>
                        <li className="footer__item">
                            Телеграм:
                            <address>
                                <a className="a footer__address" href="">@advantfo</a>
                            </address>
                        </li>
                        <li className="footer__item">
                            Вконтакте:
                            <address>
                                <a className="a footer__address" href="">vk.com/advantfo</a>
                            </address>
                        </li>
                    </ul>
                    <aside>
                        <h3>Advant<span className="green">fo.r</span>u</h3>
                    </aside>
                </section>
            </footer>
        </>
    )
}

export default Layout