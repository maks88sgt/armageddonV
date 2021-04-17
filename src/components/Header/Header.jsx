import React from "react";
import { NavLink} from 'react-router-dom'

export function Header() {

    return (
        <header className='container sticky-top bg-white header'>
            <div className="row row-cols-lg-2 row-cols-sm-1">
                <div className='col-md-7 col-sm-12 '>
                    <h1>ARMAGGEDON V</h1>
                    <p>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
                </div>
                <nav className='col-md-5 col-sm-12 navList'>
                    <ul className='nav float-right'>
                        <li className='nav-item col-sm-6'>
                            <NavLink activeClassName='activeNavLink' to="/asteroids">Астероиды</NavLink>
                        </li>
                        <li className='nav-item col-sm-6'>
                            <NavLink activeClassName='activeNavLink' to="/destroyment">Уничтожение</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
