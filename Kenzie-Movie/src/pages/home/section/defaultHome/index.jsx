import { CardList } from "./cardList";
import style from "./style.module.scss";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

export const DefaultHome = () => {
    return (
        <>
            <div className="container">
                <section className={`${style.container__defaultTemplate}`}>
                    <img src="https://res.cloudinary.com/dsbkp5841/image/upload/v1688390764/Rectangle_5_mgqd46.jpg" alt="imagem de um filme" />

                    <div className={style.container__main}>
                        <div className={style.container__category}>
                            <span className={`${style.btn__category} btn medium menu-item`}>ficção</span>
                            <p className={`${style.category__time} paragraph`}>90m</p>
                        </div>

                        <div className={style.container__review}>
                            <h3 className={`${style.title__category} title1`}>The random Heros</h3>
                            <div className={`${style.container__star}`}>
                                <button >
                                    <MdOutlineStarBorderPurple500 size={40} className={style.star__icon} />
                                </button>
                                <p className="paragraph">5.0</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <ul className={style.container__cardList}>
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                        </ul>
                    </div>
                </section>
            </div>

        </>
    )
}