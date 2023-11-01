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

            <div className="container">

                <div className={style.container__paragraph}>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Numquam, animi! Asperiores et ipsam voluptate,
                        repudiandae harum dignissimos eligendi cumque
                        iste mollitia repellendus magni at,
                        voluptatem itaque, modi fuga quo error.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rem id perferendis placeat? Hic pariatur animi inventore minima aspernatur nam, provident,
                        tenetur sed voluptas illo, tempore expedita esse ipsa cumque!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Dolorem magnam odit veniam similique ducimus facere dicta. Debitis, eveniet? Odit error labore est unde reprehenderit quidem placeat. Repellat ipsa ratione vel!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio numquam rerum, facilis dolor, odio repellat alias itaque explicabo animi ullam iure
                        sapiente ab accusamus, voluptatibus delectus laboriosam minima atque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in beatae nostrum ab dignissimos omnis magni temporibus inventore at dolore fugiat,
                        soluta nemo laboriosam non similique asperiores, nesciunt iusto alias.
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
                        <CardReviewList />
                        <CardReviewList />
                        <CardReviewList />
                        <CardReviewList />
                        <CardReviewList />
                    </ul>
                </div>
            </div>
        </section>
    )
}