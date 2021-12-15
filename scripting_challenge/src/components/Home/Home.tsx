import style from './Home.module.css';
import logo from '../../assets/Marvel-Logo-PNG.png';

export function Home() {
    return (
        <section className={style.wrap}>
            <header className={style.header}>
                <a href="#"><img src={logo} alt="logo" className={style.logo} /></a>
                <ul className={style.navigation}>
                    <li className={style.navigationItems}><a className={style.a} href="/heroes">Heroes</a></li>
                </ul>
            </header>

            <video className={style.video} src="https://ak.picdn.net/shutterstock/videos/1055814122/preview/stock-footage-rostov-on-don-russia-july-hands-flipping-comic-book-pages-comics-background-k.webm" muted loop autoPlay></video>

            <div className={style.content}>
                <div className={style.textBox}>
                    <h2 className={style.h2}><span className={style.span}>Marvel</span> Superheroes</h2>
                    <p className={style.p}>Find out more about the marvel world, their characters, comics, stories and more!</p>
                    <a className={style.button} href='/heroes'>Know our heroes!</a>
                </div>
            </div>
        </section>
    )
}