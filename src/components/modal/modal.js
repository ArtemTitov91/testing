import React from 'react';
import ReactDOM from "react-dom";
import './modal.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { READ_ONLY, EDIT_ONLY, CLOSE_MODAL } from '../../service/action/action';

const modalDom = document.getElementById("modals");

export const Modal = () => {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
    } = useForm({ mode: 'onChange' });

    const dispatch = useDispatch();
    const editCard = () => {
        dispatch({
            type: EDIT_ONLY,
        })
    }

    const onSubmit = (data) => {
        dispatch({type: READ_ONLY});
        dispatch({type: CLOSE_MODAL});
        console.log(JSON.stringify(data));
    }

    const { modal, element, readOnly } = useSelector(state => state.reducer)

    return ReactDOM.createPortal(
        (<div className={modal ? 'modal' : 'modal_close'}>
            <div className='modal__header'>
                <h2 className='modal__title'>Профиль пользователя</h2>
                <button
                 className='modal__button'
                  type='button'
                  onClick={editCard}
                  >Редактировать</button>
            </div>
            <form className='modal__form'
                name='person-information'
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* 1st */}
                <div className='modal__input-about'>
                    <label htmlFor='name' className='modal__input-name'>Name:</label>
                    <input
                        readOnly={readOnly ? false : true}
                        type='text'
                        id='name'
                        className={errors?.name ? 'modal__input modall__input_error' : 'modal__input modall__input_not-error'}
                        placeholder={element ? element.name : ''}
                        {...register('name', {
                            required: 'Ваше имя',
                            value: element ? element.name : '',
                            minLength: { value: 3, message: 'Минимум 3 символа' }
                        })}
                    />
                    <div className='modal__error'>
                        {errors?.name && <p style={{ margin: 0 }}>{errors?.name?.message || 'Имя'}</p>}
                    </div>
                </div>
                {/* 2nd */}
                <div className='modal__input-about'>
                    <label htmlFor='nickName' className='modal__input-name'>User name:</label>
                    <input type='text'
                        readOnly={readOnly ? false : true}
                        className={errors?.nickName ? 'modal__input modall__input_error' : 'modal__input modall__input_not-error'}
                        id='nickName'
                        placeholder={element ? element.username : ''}
                        {...register('nickName', {
                            required: 'Ваш ник',
                            value: element ? element.username : '',
                            minLength: { value: 3, message: 'Минимум 3 символа' }
                        })}
                    />
                    <div className='modal__error'>
                        {errors?.nickName && <p style={{ margin: 0 }}>{errors?.nickName?.message || 'Имя пользователя'}</p>}
                    </div>
                </div>
                {/* 3rd */}
                <div className='modal__input-about'>
                    <label htmlFor='e_mail' className='modal__input-name'>E-mail</label>
                    <input type='email'
                        readOnly={readOnly ? false : true}
                        className={errors?.e_mail ? 'modal__input modall__input_error' : 'modal__input modall__input_not-error'}
                        id='e_mail'
                        placeholder={element ? element.email : ''}
                        {...register('e_mail', {
                            required: 'Введите ваш Email',
                            value: element ? element.email : '',
                            setValueAs: v => v.split('').some(el => el === '@'),
                            minLength: { value: 3, message: 'Минимум 3 символа' }
                        })}
                    />
                    <div className='modal__error'>
                        {errors?.e_mail && <p style={{ margin: 0 }}>{errors?.e_mail?.message || 'Ведите вашу почту'}</p>}
                    </div>
                </div>
                {/* 4th */}
                <div className='modal__input-about'>
                    <label htmlFor='street' className='modal__input-name'>Street</label>
                    <input type='text'
                        readOnly={readOnly ? false : true}
                        className={errors?.street ? 'modal__input modall__input_error' : 'modal__input modall__input_not-error'}
                        id='street'
                        placeholder={element ? element.address.street : ''}
                        {...register('street', {
                            required: 'Введите вашу Улицу',
                            value: element ? element.address.street : '',
                            minLength: { value: 3, message: 'Минимум 3 символа' }
                        })}
                    />
                    <div className='modal__error'>
                        {errors?.street && <p style={{ margin: 0 }}>{errors?.street?.message || 'Ваша улица'}</p>}
                    </div>
                    {/* 5th */}
                </div>
                <div className='modal__input-about'>
                    <label htmlFor='city' className='modal__input-name'>City</label>
                    <input type='text'
                        readOnly={readOnly ? false : true}
                        className={errors?.city ? 'modal__input modall__input_error' : 'modal__input modall__input_not-error'}
                        id='city'
                        placeholder={element ? element.address.city : ''}
                        {...register('city', {
                            required: 'Введите ваш город',
                            value: element ? element.address.city : '',
                            minLength: { value: 3, message: 'Минимум 3 символа' }
                        })}
                    />
                    <div className='modal__error'>
                        {errors?.city && <p style={{ margin: 0 }}>{errors?.city?.message || 'Ваш город'}</p>}
                    </div>
                </div>
                {/* 6th */}
                <div className='modal__input-about'>
                    <label htmlFor='zipCode' className='modal__input-name'>Zip-code:</label>
                    <input
                        readOnly={readOnly ? false : true}
                        // type='number'
                        className={errors?.zipcode ? 'modal__input modall__input_error' : 'modal__input modall__input_not-error'}
                        id='zipCode'
                        placeholder={element ? element.address.zipcode : ''}
                        {...register('zipcode', {
                            required: 'Введите ваш Zip-code',
                            pattern: { value: /[0-9]{5}-[0-9]{4}/, message: 'Ведите ваш Zip-code' },
                            value: element ? element.address.zipcode : '',
                        })}
                    />
                    <div className='modal__error'>
                        {errors?.zipcode?.message}
                    </div>
                </div>
                <div className='modal__input-about'>
                    <label htmlFor='phone' className='modal__input-name'>Phone:</label>
                    <input type='text'
                        readOnly={readOnly ? false : true}
                        className={errors?.phone ? 'modal__input modall__input_error' : 'modal__input modall__input_not-error'}
                        id='phone'
                        placeholder={element ? element.phone : ''}
                        {...register('phone', {
                            required: 'Введите ваш телефон',
                            value: element ? element.phone : '',
                            minLength: { value: 10, message: 'Минимум 10 символов' }
                        })}
                    />
                    <div className='modal__error'>
                        {errors?.phone?.message}
                    </div>
                </div>
                <div className='modal__input-about'>
                    <label htmlFor='website' className='modal__input-name'>Website:</label>
                    <input type='text'
                        readOnly={readOnly ? false : true}
                        className={errors?.website ? 'modal__input modall__input_error' : 'modal__input modall__input_not-error'}
                        id='website'
                        placeholder={element ? element.website : ''}
                        {...register('website', {
                            value: element ? element.website : '',
                            pattern: { value: /[A-Za-z]\.[a-z]/, message: 'Ведите ваш веб-адресс' },
                        })}
                    />
                    <div className='modal__error'>
                        {errors?.website?.message}
                    </div>
                </div>
                <div className='modal__input-about'>
                    <label className='modal__input-name'>Comment</label>
                    <textarea readOnly={readOnly ? false : true}
                        type='text'
                        className='modal__input modal__input-commit'
                    ></textarea>
                </div>
                <button type='submit'
                 className='modal__button-submit'
                  disabled={!isValid}
                  >Отправить</button>
            </form>

        </div>), modalDom

    )
}