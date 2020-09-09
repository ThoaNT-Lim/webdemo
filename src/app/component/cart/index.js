import React, { Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from './action'

const Cart = () => {
    const number = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    console.log('number', number)

    return (
        <h2> cart </h2>
    )
}

export default Cart;