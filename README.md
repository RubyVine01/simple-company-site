# Simple Company Site

## Описание проекта

Это простое двухстраничное веб-приложение, включающее главную страницу и страницу с формой обратной связи. Проект демонстрирует использование React, Next.js и Material UI для создания адаптивного интерфейса с компонентами, доступными для пользователей различных устройств. Backend-часть обрабатывает данные из формы и возвращает подтверждение для пользователя.

## Основные возможности
Главная страница с встроенным видео, несколькими разделами и кнопками для перехода на страницу с формой.
Форма обратной связи с валидацией данных на клиенте и сервере.
Backend для обработки отправки данных формы и генерации ответного сообщения.
Отложенная загрузка YouTube для улучшения производительности и уменьшения времени LCP (Largest Contentful Paint).
SEO оптимизация через Open Graph и Twitter Card теги для улучшения видимости в социальных сетях.
Технологии
Frontend: Next.js, React, Material UI
Styling: CSS-in-JS (Material UI sx), глобальные стили через CSS
Backend: API Routes в Next.js для обработки запросов
Ленивая загрузка видео: Intersection Observer API

## Установка и запуск проекта

### Локальная настройка

1. Склонируйте репозиторий:

```bash
git clone https://github.com/RubyVine01/simple-company-site.git
```

2.Перейдите в директорию проекта:

```bash
cd simple-company-site
```

3. Установите зависимости:

bash
```bash
npm install
```

4. Запустите проект в режиме разработки:

```bash
npm run dev
```
5. Откройте браузер и перейдите по адресу http://localhost:3000.

## Хостинг проекта
Проект можно развернуть на таких платформах, как Vercel, Netlify, AWS, Azure, или Yandex Cloud. Например, для Vercel:

Войдите в аккаунт Vercel и выберите "Import Project".
Подключите репозиторий и настройте проект.
После завершения развертывания получите URL для развернутого сайта.

## Стратегии стилизации и производительности
Стилизация
Используется Material UI с sx для адаптивной стилизации, что позволяет менять стили в зависимости от размера экрана.
CSS-in-JS позволяет динамически изменять стиль компонентов и использовать breakpoints для адаптивности.
Глобальные стили установлены через файл globals.css.
Оптимизация SEO и производительности
Open Graph и Twitter Cards: Включены мета-теги для генерации карточек в соцсетях.
Lazy Loading для YouTube: Видео загружается только при видимости в области просмотра, снижая нагрузку на LCP.
Отложенная загрузка компонентов: Использование Intersection Observer для улучшения UX и скорости загрузки.
Лучшие практики доступности: Учитываются иерархии заголовков, доступность полей формы и цветовые контрасты.
Допущения
Относительные позиции элементов: Позиции элементов на странице установлены в соответствии с предоставленными макетами, но точные цвета и шрифты могут отличаться.
Форма обратной связи: Все поля формы обязательны к заполнению, и форма не отправится без валидных данных.
Обработка ошибок: Сервер отвечает на некорректные данные форм с ошибкой 400, а на случайные ошибки — с ошибкой 500.
Структура проекта
/src/app: Содержит страницы и маршруты API для backend-функций.
/src/components: Отдельные компоненты для организации UI.
/src/styles/globals.css: Глобальные стили для всего приложения.
/src/app/api/contact/routes.ts: Обработчик для формы обратной связи, содержащий логику валидации и отправки данных.
Скриншоты
Главная страница
Страница формы обратной связи
Страница подтверждения отправки
Контактная информация
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
