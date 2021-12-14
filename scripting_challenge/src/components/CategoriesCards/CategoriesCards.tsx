import style from './CategoriesCards.module.scss';

export function CategoriesCards({img, title, description}: any) {
    return (
        <div className={style.container}>
            <img className={style.img} src={img} />
            <h1 className={style.title}>{title}</h1>
            <p>{description}</p>
        </div>
    )
}