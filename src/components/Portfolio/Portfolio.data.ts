import { IPortfolio } from "./Portfolio.types";

import image_1 from "../../assets/images/portfolio/1.jpg";
import image_2 from "../../assets/images/portfolio/2.jpg";
import image_3 from "../../assets/images/portfolio/3.jpg";
import image_4 from "../../assets/images/portfolio/4.jpg";
import image_5 from "../../assets/images/portfolio/5.jpg";
import image_6 from "../../assets/images/portfolio/6.jpg";

export const elements: IPortfolio[] = [
    {
        id: 1,
        image: image_1,
        title: 'Газфонд',
        description: 'Инструмент для отслеживания пенсионных накоплений и выплат: проектирование, дизайн, разработка приложений для iOS и Android'
    },
    {
        id: 2,
        image: image_2,
        title: 'CRM - система AIBA',
        description: 'Внутренняя система для Международной ассоциации бокса AIBA: дизайн и программирование версии для десктопа'
    },
    {
        id: 3,
        image: image_3,
        title: 'Qube Club',
        description: 'Универсальный инструмент по управлению кафе и ресторанами: веб-приложение, панель администратора, телеграм-бот и печать чеков'
    },
    {
        id: 4,
        image: image_4,
        title: 'Ecoline',
        description: 'Сервис для вывоза бытовых отходов и заботы об экологии: разработка мобильных приложений на iOS и Android'
    },
    {
        id: 5,
        image: image_5,
        title: 'IMscored',
        description: 'Платформа для персональной и профессиональной оценки личности на основе социальных и профессиональных характеристик ваших контактов.'
    },
    {
        id: 6,
        image: image_6,
        title: 'Автодата',
        description: 'Мобильное приложение для сбора данных об эксплуатации автомобиля и их продажи на бирже: приложение для iOS'
    },
] 