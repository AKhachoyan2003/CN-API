import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_ALL_JOKES } from '../../store/types';
import styles from './Footer.module.css';

export const Footer = () => {
    const dispatch = useDispatch();

    const removeAll = (): void => {
        dispatch({type: REMOVE_ALL_JOKES});
        localStorage.clear();
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__content}>
                    <h2>
                        Footer
                    </h2>
                    <button onClick={removeAll} className={styles.remove__all}>
                        Remove All
                    </button>
                </div>
            </div>
        </footer>
    )
}