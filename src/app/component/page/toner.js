import React, { Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../dashboard/comp/header';
import SideBarDashboard from '../dashboard/comp/sidebar';

import { Card, Button } from 'antd';

const Meta = Card;
const Toner = () => {
  const dataCart = useSelector(state => state.cartReducer.cart);
  const dataAllProduct = useSelector(state => state.reducerDashboard.dataAllProduct);
  const addToCart = useDispatch();
  const dataToner = dataAllProduct.filter((state) => state.type === "type 1");
    console.log(dataToner);
  const handleClick = (item) => {
    addToCart(item);
  }

  return (
    <Fragment>
      <Header />
      {/* <div>
        <ul>
          {namesList}
        </ul>
      </div> */}
      <div className="app-main">
        <SideBarDashboard />
        <div className="app-main_outer">
          <div className="panel">
            <div className="product">
              {dataToner &&
                dataToner.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="product" src={item.imageUrl} />}
                    >
                      <Meta title={item.name} discription={item.discription} />
                         <Button onClick = {() => handleClick(item)} type="primary" className="submit" danger>
                         Add to card
                       </Button>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )

}

export default Toner;