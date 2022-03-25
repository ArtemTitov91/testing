import React from 'react';
import './card.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL } from '../../service/action/action';

export const Card = ({ name, city, company, data }) => {

    const dispatch = useDispatch();

    const OpenModal = () => {
        dispatch({
            type: OPEN_MODAL,
            data: data
        })
    }

    return (
        <div className='card'>
            <ul className='card__info'>
                <li className='card__info-key'>Ф.И.О: <span className='card__key-about'>{name}</span></li>
                <li className='card__info-key'>Город: <span className='card__key-about'>{city}</span></li>
                <li className='card__info-key'>Компания: <span className='card__key-about'>{company}</span></li>
            </ul>
            <button onClick={OpenModal} className='card__button' type='button'>Подробнее</button>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
}