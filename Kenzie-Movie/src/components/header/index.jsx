import style from "./style.module.scss"

export const Header = () => {
    return (
        <header className={style.container__header}>
            <nav>
                <div className={style.container__logo}>kenziemovie</div>
                <ul>
                    <li>
                        <h3>Cadastre-se</h3>
                        <button>Entrar</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}