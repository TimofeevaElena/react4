import './Katalog.css'
import Card from '../Card/Card'


export default function Katalog(){

    return(
        <div className="katalog">
            <div className="container">
                <div className="links">
                    <p className="text">Главная\Каталог</p>
                </div>
                <div className="filters">
                    <div className="filters-content">
                        <a href="" className="filter">Все</a>
                        <a href="" className="filter">Топ</a>
                        <a href="" className="filter">Низ</a>
                        <a href="" className="filter">Обувь</a>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards-content">
                        <Card name="Рубашка" price="4500 ₽"/>
                        <Card name="Кроссовки" price="12900 ₽"/>
                        <Card name="Топ" price="2500 ₽"/>
                        <Card name="Футболка" price="4500 ₽"/>
                        <Card name="Кроссовки" price="12900 ₽"/>
                        <Card name="Топ" price="2500 ₽"/>
                    </div>
                </div>
            </div>
        </div>
    )
}