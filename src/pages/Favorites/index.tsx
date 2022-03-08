import React, { FC } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { removeAllFavs } from '../../store/actions';
import { REMOVE_FAV_JOKE, REMOVE_JOKE } from '../../store/types';
import { Props, State } from '../../types/interfaces';
import styles from './Favorites.module.css';

export const Favorites: FC<Props> = ({ state }) => {
    const dispatch = useDispatch();

    const removeItem = (id: number): void => {
        dispatch({ type: REMOVE_FAV_JOKE, id });
    }

    const removeAll = () => {
        dispatch(removeAllFavs());
    }

    const notShiftedArray = () => {
        return state?.jokesReducer.favorites.map((favJoke: any, index) => {
            return <div key={index} className={styles.favJokes__wrapper}>
                <div className={styles.favJoke__div}>
                    {favJoke}
                </div>
                <button onClick={() => removeItem(index)}>
                    Remove
                </button>
            </div>
        })
    }

    const shiftedArray = () => {
        if (state?.jokesReducer.favorites && state?.jokesReducer.favorites.length > 10) {
            state?.jokesReducer.favorites.shift();
            return state?.jokesReducer.favorites.map((favJoke, index) => {
                return <div key={index} className={styles.favJokes__wrapper}>
                    <div className={styles.favJoke__div}>
                        {favJoke}
                    </div>
                    <button onClick={() => removeItem(index)}>
                        Remove
                    </button>
                </div>
            });
        }
    }

    return (
        <div className='wrapper'>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    {state?.jokesReducer.favorites && state?.jokesReducer.favorites.length <= 10 ? notShiftedArray() : shiftedArray()}
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footer__content}>
                        <h2>
                            Footer
                        </h2>
                        <button onClick={removeAll}>
                            Remove All
                        </button></div>
                </div>
            </footer>
        </div>
    )
}

const mapStateToProps = (state: State) => ({ state });

export default connect(mapStateToProps, null)(Favorites);