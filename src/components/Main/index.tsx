import React, { FC, useState } from 'react';
import styles from './Main.module.css';
import { connect, useDispatch } from 'react-redux';
import { browserHistory } from '../../browserHistory';
import { Props, State } from '../../types/interfaces';
import { ADD_TO_FAV, REMOVE_JOKE } from '../../store/types';
import { getJoke } from '../../store/actions';

export const Main: FC<Props> = ({ state }) => {
    const [isClicked, setIsClicked] = useState(true);
    let [intervalID, setIntervalID] = useState(setInterval(() => { }));

    const dispatch = useDispatch();

    const getRandomJoke = (): void => {
        dispatch(getJoke());
    }

    const intervalJokes = (): void => {
        setIsClicked(!isClicked);
        if (isClicked) {
            setIntervalID(setInterval(() => {
                getRandomJoke();
            }, 2000));
        } else {
            clearInterval(intervalID);
        }
        localStorage.setItem('jokes', JSON.stringify(state?.jokesReducer.jokes));
    }


    const removeItem = (id: number): void => {
        dispatch({ type: REMOVE_JOKE, id });
    }

    const addToFavorites = (id: number): void => {
        dispatch({ type: ADD_TO_FAV, id });
    }

    const redirectToFavorites = (): void => {
        browserHistory.push('/favorites');
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.main__content}>
                    <button onClick={getRandomJoke} className={styles.button}>
                        Get Random Joke
                    </button>

                    <button onClick={intervalJokes} className={styles.button}>
                        {isClicked ? `Interval Jokes` : `Stop Interval`}
                    </button>

                    <button onClick={redirectToFavorites} className={styles.button}>
                        Favorites
                    </button>
                </div>
                {
                    state?.jokesReducer.jokes.map((joke, index) => {
                        return <div key={index} className={styles.jokes__wrapper}>
                            <div className={styles.joke__div}>
                                <p>
                                    {joke}
                                </p>
                            </div>
                            <button onClick={() => addToFavorites(index)}>
                                Add To Favorites
                            </button>
                            <button onClick={() => removeItem(index)}>
                                Remove
                            </button>
                        </div>
                    })
                }
            </div>
        </main >
    )
}

const mapStateToProps = (state: State) => ({ state });

export default connect(mapStateToProps, null)(Main);