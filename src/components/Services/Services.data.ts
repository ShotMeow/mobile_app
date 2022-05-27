import { IService } from "./Services.types";

import image_1 from "../../assets/images/services/1.png";
import image_2 from "../../assets/images/services/2.png";
import image_3 from "../../assets/images/services/3.png";
import image_4 from "../../assets/images/services/4.png";
import image_5 from "../../assets/images/services/5.png";
import image_6 from "../../assets/images/services/6.png";

export const services: IService[] = [
    {
        id: 1,
        title: 'Аналитика',
        description: 'Проводим конкурентный анализ рынка, используем лучшие решения для создания первоклассных продуктов.',
        image: image_1
    },
    {
        id: 2,
        title: 'Проектирование',
        description: 'Реализуем бизнес-задачи с помощью дружественных пользователю интерфейсов на базе аналитики.',
        image: image_2
    },
    {
        id: 3,
        title: 'Дизайн',
        description: 'Создаем лучший пользовательский опыт. Рисуем удобные и понятные интерфейсы, которые работают.',
        image: image_3
    },
    {
        id: 4,
        title: 'Разработка',
        description: 'Воплощаем приложение в коде. Пишем чистый истабильный код, интегрируем его с технологиями заказчика.',
        image: image_4
    },
    {
        id: 5,
        title: 'Тестирование',
        description: 'Тестируем сервис на разных устройствах и гарантируем выпуск качественного продукта точно в срок.',
        image: image_5
    },
    {
        id: 6,
        title: 'Продвижение',
        description: 'Поддерживаем и улучшаем продукт на основе обратной связи. Тысячи скачиваний и вывод в топы сторов.',
        image: image_6
    },
]