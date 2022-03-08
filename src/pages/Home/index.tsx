import React from 'react';
import { Header } from '../../components/Header';
import Main from '../../components/Main';
import { Footer } from '../../components/Footer';

export const Home = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}