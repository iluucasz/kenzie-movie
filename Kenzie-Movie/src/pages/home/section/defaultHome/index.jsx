import style from "./style.module.scss"

export const DefaultHome = () => {
    return (
        <section className={style.container__defaultTemplate}>
            <img src="https://res.cloudinary.com/dsbkp5841/image/upload/v1688390764/Rectangle_5_mgqd46.jpg" alt="imagem de um filme" />

            <div className={style.container__category}>
                <span className={`${style.btn__category} btn medium menu-item`}>categoria</span>
                <h3 className={`${style.title__category} title1`}>Titulo</h3>
            </div>

            <div>
                <p>tempo</p>
                <div>
                    <button>simbolo</button>
                    <span>numero</span>
                </div>
            </div>
        </section>
    )
}