import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import style from "./style.module.scss";

export const CardList = () => {
    return (
        <li className={style.container__card}>
            <img src="https://res.cloudinary.com/dsbkp5841/image/upload/v1688390764/Rectangle_5_mgqd46.jpg" alt="imagem" />

            <div className={style.container__main}>

                <div className={style.container__category}>
                    <span className={`${style.btn__category} btn medium menu-item`}>ficção</span>
                    <h3 className="title1-mobile-b">the Road</h3>
                </div>

                <div className={style.container__review}>
                    <p className={`${style.review__time} paragraph`}>90m</p>
                    <div className={`${style.container__star}`}>
                        <button >
                            <MdOutlineStarBorderPurple500 size={40} className={style.star__icon} />
                        </button>
                        <p className="paragraph">5.0</p>
                    </div>
                </div>

            </div>
        </li>
    )
}