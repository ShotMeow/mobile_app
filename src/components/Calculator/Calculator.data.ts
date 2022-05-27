import { ICheckbox } from "./Calculator.types";

export const platformData: ICheckbox[] = [
    {
        id: 1,
        title: 'IOS',
        isActive: false
    },
    {
        id: 2,
        title: 'Android',
        isActive: false
    },
]

export const authData: ICheckbox[] = [
    {
        id: 1,
        title: 'по email',
        isActive: false
    },
    {
        id: 2,
        title: 'по телефону',
        isActive: false
    },
    {
        id: 3,
        title: 'через Вконтакте',
        isActive: false
    },
    {
        id: 4,
        title: 'через Facebook',
        isActive: false
    },
    {
        id: 5,
        title: 'Двухфакторная авторизация',
        isActive: false
    },
    {
        id: 6,
        title: 'Восстановление пароля',
        isActive: false
    },
]

export const animsData: ICheckbox[] = [
    {
        id: 1,
        title: '2D анимации',
        isActive: false
    },
    {
        id: 2,
        title: '3D анимации',
        isActive: false
    }
]

export const extrasData: ICheckbox[] = [
    {
        id: 1,
        title: 'Пуш-уведомления',
        isActive: false
    },
    {
        id: 2,
        title: 'Обратная связь',
        isActive: false
    }
]