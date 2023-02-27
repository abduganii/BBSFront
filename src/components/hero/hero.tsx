import { useState } from "react";
import Safety from "../safety/safety";

export default function Hero() {
    const [input, setInput] = useState<any>('')
    return (
        <div className="hero">
            <div className="container">

                <div className="hero_left">
                    <div className="hero_left-wrap">
                        <h1 className="hero_left-title">Что нужно знать, чтобы обезопасить своих сотрудников в вашей компании</h1>
                        <p className="hero_left-text">Обеспечение безопасности ваших сотрудников и бесперебойной работы вашего бизнеса — наша главная задача!</p>
                    </div>

                    <div className="hero-safety">
                        <Safety />
                        <Safety />
                    </div>
                </div>
                <div className="hero_right">
                    <h3 className="hero_right-title">Контакт для консультации:</h3>
                    <p className="hero_right-tel">+998 90 100-00-00</p>
                    <p className="hero_right-gmail">info@gmail.com</p>
                    <p className="hero_right-text">Оставить свой номер телефона для обратного звонка?</p>
                    <input className="hero_right-input" type="text" placeholder="+998" value={input} onChange={e => {
                        if (e.target.value.length == 1) {
                            setInput("+998" + e.target.value)
                        } else {
                            setInput(e.target.value)
                        }
                    }} />
                    <button className="btn-send">Отправить</button>
                </div>
            </div>

            <div>
                <div className="hero_color"></div>
                <div className="hero_color"></div>
                <div className="hero_color"></div>
            </div>
        </div>
    )
}