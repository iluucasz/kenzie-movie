import style from "./style.module.scss"

export const Header = () => {
    return (
        <header className={style.container__header}>

            <div className={`${style.container__logo} menu-item`}>kenziemovie</div>

            <ul>
                <li>
                    <h3 className="menu-item">Cadastre-se</h3>
                    <button className="btn">Entrar</button>
                </li>
            </ul>

        </header>
    )
}