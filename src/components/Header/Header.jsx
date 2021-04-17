import React from "react";
import {Link} from 'react-router-dom'

export function Header() {
    return (
        <header className='container sticky-top bg-white'>
            <div className="row">
                <div className='col-md-7 col-sm-12 '>
                    <h1>ARMAGGEDON V</h1>
                    <p>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
                </div>
                <nav className='col-md-5 col-sm-12'>
                    <ul className='nav float-right row'>
                        <li className='nav-item col-sm-6 navLink'>
                            <Link to="/asteroids">Астероиды</Link>
                        </li>
                        <li className='nav-item col-sm-6 navLink'>
                            <Link to="/destroyment">Уничтожение</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
