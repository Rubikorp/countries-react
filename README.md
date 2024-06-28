# COUNTRIES

Исходники взяты с сайта
URL: https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca

## Цели и задачи

**Цель:**

- адаптироваться к требованиям макета проекта
- изучить и применить новые приемы и методы в разработки

**Задачи:**

1. Выпольнить реализацию приложения по макету
2. Использовать React + TypeScript
3. Реализовать фильтрацию
4. Реализовать запрос к серверу

**STACK:**

- REACT v.18
- react router dom v.6
- react icons
- react select
- styled components
- SCSS
- Axios
- TypeScript

**Сборщик**

- Vite

## Архитектура и значение папок

`src/component` - стили и компоненты

`src/pages` - основные страницы

`src/services` - конфиг и функции запросов на сервер

`src/types` - часто используемые типы

`src/utils` - функции, часто используемые

## Команды:

`npm run deploy` - запуск деплоя в _github pages_

`npm run dev` - запуск в режиме разработчика

## Что можно улучшить

- Использовать statemanager Redux или Redux Toolkit

## Описание моментов

- Темный режим реализован с помощью глобальной переменной в App.scss в data атрибуте тега body. (см. `App.scss and HeaderComponent.ts`)
- При запросе на сервер, я использовал последнию API c сайта URL: https://restcountries.com/v3.1/. Из-за чего возникли трудности с пришедшими данными. Например: `currencies` приходил объектом, а не массивом, из-за чего приходилось парсить его в массив доставая значения (см. `Info.tsx`)

---

**Приложение доступно по URL:** https://rubikorp.github.io/countries-react/
