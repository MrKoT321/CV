import styles from "./Resume.module.css";
import Image from "next/image";

export default function CV() {
    return (
        <div className={styles.resume}>
            <section className={styles.header}>
                <Image
                    src="https://study.ispring.ru/image/download/api/public/download/v1/image/3722b32e-4e28-11ee-9de3-7671d23d65fe/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhIjoiaXNscnUtMTAwNzQzMzciLCJpIjoiMzcyMmIzMmUtNGUyOC0xMWVlLTlkZTMtNzY3MWQyM2Q2NWZlIiwidyI6MCwiaCI6MCwiZiI6MCwiciI6MCwiZXhwIjoxNzM4NTQwODAwLCJMZWV3YXlUaW1lIjpudWxsfQ.hs6ltG5-SqdnhacII98GMfvumgghGDIAXy3O5gpwYCw"
                    alt="User profile image"
                    width={150}
                    height={150}
                    className={styles.avatar}
                />
                <div className={styles.headerInfo}>
                    <h1>{'Федосеев Владимир'}</h1>
                    <p>{'20 лет, родился 27 июля 2004'}</p>
                    <p>
                        {'+7(902)745-72-22'}<span>{' — предпочитаемый способ связи'}</span>
                    </p>
                    <a href="mailto:vladimir.fedossev.2004@mail.ru">{'vladimir.fedossev.2004@mail.ru'}</a>
                    <p>{'Йошкар-Ола, Россия'}</p>
                    <p>{'Готов к переезду и к командировниям'}</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2>{'Желаемая должность и зарплата'}</h2>
                <p>{'Бэкенд разработчик — 80 000₽'}</p>
                <p>{'Специализации:'}</p>
                <ul>
                    <li>{'Профессия: Программист, разработчик'}</li>
                    <li>{'Занятость: частичная занятость'}</li>
                    <li>{'График работы: гибкий график'}</li>
                    <li>{'Желательное время в пути до работы: не более часа'}</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>{'Опыт работы — 1 год 1 месяц'}</h2>
                <p>{'Сентябрь 2023 — настоящее время'}</p>
                <div className={styles.experience}>
                    <h3>{'iSpring'}</h3>
                    <p>{'Йошкар-Ола'}</p>
                    <p>{'Отдел: Отдел разработки систем автоматизации продаж, CRM'}</p>
                    <p>{'Должность: Программист'}</p>
                    <p>{'Разработка архитектуры, написание backend приложения. Применял MySQL, PHP (Symfony, Doctrine). Есть опыт сборки приложения через Docker.'}</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2>{'Образование'}</h2>
                <p>{'Неоконченное высшее — 2026'}</p>
                <p>{'Поволжский государственный технологический университет, Йошкар-Ола'}</p>
                <p>{'Факультет информатики и вычислительной техники, Программная инженерия'}</p>
            </section>

            <section className={styles.section}>
                <h2>{'Навыки'}</h2>
                <ul>
                    <li>{'MySQL'}</li>
                    <li>{'PHP'}</li>
                    <li>{'Git'}</li>
                    <li>{'SQL'}</li>
                    <li>{'Symfony'}</li>
                    <li>{'Docker'}</li>
                    <li>{'REST API'}</li>
                    <li>{'Английский язык (B1)'}</li>
                    <li>{'Тайм - менеджмент'}</li>
                    <li>{'Постановка целей по SMART'}</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>{'Дополнительная информация'}</h2>
                <p>{'Легко нахожу общий язык с коллегами. Ставлю конкретные цели и всегда стараюсь уложиться в ' +
                    'установленный строк. В сложных ситуациях сохраняю терпение и открытость.'}</p>
                <p>{'Люблю публичные выступления и нахожу в этом возможность делиться опытом с другими разработчиками.'}</p>
            </section>
        </div>
    )
}