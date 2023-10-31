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
                    <span className={`${style.btn__category} btn medium menu-item`}>Ficção</span>
                    <p className={`${style.category__time} paragraph`}>90m</p>
                </div>

                <div className={style.container__category}>
                    <h3 className={`${style.title__category} title1`}>The Random Heros</h3>
                    <div className={`${style.container__star}`}>
                        <button>
                            <MdOutlineStarBorderPurple500 size={40} className={style.star__icon} />
                        </button>
                        <span className="paragraph">5.0</span>
                    </div>
                </div>

            </div>

            <div>
                <p>texto de avaliação</p>
            </div>

            <div>
                <h3>titulo</h3>
                <button>
                    <span>icone</span>
                    <p>avaliar</p>
                </button>
            </div>

            <div>
                <ul>
                    {/* LÓGICA DE RENDERIZAR AVALIAÇÕES DO USUÁRIO */}
                </ul>
            </div>
        </section>
    )
}