import { CardReviewList } from "./cardReviewList";
import style from "./style.module.scss";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

export const UserHome = () => {

    const backgroundImageUrl = 'url("https://res.cloudinary.com/dsbkp5841/image/upload/v1688390764/Rectangle_5_mgqd46.jpg")';

    const backgroundStyle = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 0.5) 27%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.1) 84%), ${backgroundImageUrl}`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        height: '639px',
    };

    return (
        <section className={`${style.container__user}`}>

            <div style={backgroundStyle} className={style.container__main}>

                <div className={style.container__category}>
                    <span className={`${style.btn__category} btn medium menu-item`}>
                        {/* CATEGORIA DO FILME */}
                    </span>
                    <p className={`${style.category__time} paragraph`}>
                        {/* TEMPO DO FILME */}
                    </p>
                </div>

                <div className={style.container__category}>
                    <h3 className={`${style.title__category} title1`}>
                        {/* NOME DO FILME */}
                    </h3>
                    <div className={`${style.container__star}`}>
                        <button>
                            <MdOutlineStarBorderPurple500 size={40} className={style.star__icon} />
                        </button>
                        <span className="paragraph">
                            {/* PONTUAÇÃO DO FILMES */}
                        </span>
                    </div>
                </div>

            </div>

            <div className="container">

                <div className={style.container__paragraph}>
                    <p className="paragraph">
                        {/* REVIEW DE TEXTO DO USUÁRIO */}
                    </p>
                </div>

                <div className={style.container__titleReview}>
                    <h3 className="title1">Avaliações</h3>

                    <button className={`${style.btn__review} menu-item`}>
                        <MdOutlineStarBorderPurple500 size={30} />
                        Avaliar
                    </button>
                </div>

                <div>
                    <ul className={style.container__cardReviewList}>
                        {/* MAPA DE REVIEW */}
                    </ul>
                </div>
            </div>
        </section>
    )
}