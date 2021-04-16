import React from "react";
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header () {
    return (
        <header className={styles.container}>
            <div>
                <h1>ARMAGGEDON V</h1>
                <p>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
            </div>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/asteroids">Астероиды</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/destroyment">Уничтожение</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
