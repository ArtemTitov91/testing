import React from 'react';
import './app.scss'
import Header from '../header';
import MainList from '../mainList';
import Modal from '../modal';
import { useSelector } from 'react-redux';

export const App = () => {
    
    const modal = useSelector(state => state.reducer.modal)

    return(
        <div className = 'app'>
            <Header />
            <MainList />
            {modal && <Modal />}
        </div>
    )
}

