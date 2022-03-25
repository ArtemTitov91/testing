import React, { useEffect } from 'react';
import Card from '../card';
import './mainList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../service/action'

const cards = (items) => {
    return items.map((data, index) => {
        return <li key={index}>
            <Card
                data={data}
                name={data.name}
                city={data.address.city}
                company={data.company.name}
            />
        </li>
    })
}

export const MainList = () => {
    const { modal, data, itemsRequest, itemsFailed } =
        useSelector(state => state.reducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    if (itemsRequest) return <div>ЗАГРУЗКА</div>
    if (itemsFailed) return <div>ОШИБКА</div>
    return (<>
        {data && !modal && <main className='mainList'>
            <h3 className='mainList__title'>Список пользователей</h3>
            <ul className='mainList__list'>
                {cards(data)}
            </ul>
        </main>}
    </>
    )
}