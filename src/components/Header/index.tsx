import React from 'react';
import styles from './Header.module.css';
import icon from '../../assets/icons/icon.png';
import { browserHistory } from '../../browserHistory';

export const Header = () => {
    const redirectToHome = () => {
        browserHistory.push('/');
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <img onClick={redirectToHome} src={icon} alt="Header Icon" className={styles.icon} />
                </nav>
            </div>
        </header>
    )
}