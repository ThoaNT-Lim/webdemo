import React, { Component, Fragment } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from './action'
import { Card, Button } from 'antd';

const Meta = Card; 

const ItemCart = () => {
    const dataCart = useSelector(state => state.cartReducer.cart);

    return (
        <Fragment>
            <div clasName = 'app-cart'>
                <h1>Product </h1>
                <div className="product">
                {dataCart &&
                dataCart.map((item) => {
                  return (
                      <div>
                    <span>name: {item.name}  </span>
                    <span>price: {item.price}</span>
                    </div>
                  );
                })
            }
                </div>
            </div>
               
        </Fragment>
    )
}

export default ItemCart;
