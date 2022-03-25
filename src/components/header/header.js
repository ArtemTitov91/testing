import React from 'react';
import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { SORTING } from '../../service/action/action';

const sortingCity = (arr, sortArr) => {
    return sortArr.sort().map((el) => {
        for (let elem of arr) {
            if (elem.address.city === el) {
                return elem
            }
        }
    })
}

const sortingCompany = (arr, sortArr) => {
    return sortArr.sort().map((el) => {
        for (let elem of arr) {
            if (elem.company.name === el) {
                return elem
            }
        }
    })
}


export const Header = () => {

    const { data } = useSelector(state => state.reducer);

    const dispatch = useDispatch();

    const sortOnCity = () => {
        dispatch({
            type: SORTING,
            data: sortingCity(data, data.map(el => el.address.city))
        })
    }

    const sortOnConpany = () => {
        dispatch({
            type: SORTING,
            data: sortingCompany(data, data.map(el => el.company.name))
        })
    }

    return (
        <header className='header'>
            <p className='header__title'>Cортировка</p>
            <button onClick={sortOnCity} className='header__button'>По городу</button>
            <button onClick={sortOnConpany} className='header__button'>По компании</button>
        </header>
    )
}
