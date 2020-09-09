// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Header from '../dashboard/comp/header';

// const Toner = () => {
//   const dataAllProduct = useSelector(state => state.reducerDashboard.dataAllProduct);
//   const dispatch = useDispatch();

//   return (
//     <Fragment>
//       <Header />
//       {/* <div>
//         <ul>
//           {namesList}
//         </ul>
//       </div> */}
//       <div className="app-main">
//         <SideBarDashboard />
//         <div className="app-main_outer">
//           <div className="panel">
//             <div className="product">
//               {dataAllProduct &&
//                 dataAllProduct.map((item, index) => {
//                   return (
//                     <Card
//                       key={index}
//                       hoverable
//                       style={{ width: 240 }}
//                       cover={<img alt="product" src={item.imageUrl} />}
//                     >
//                       <Meta title={item.name} discription={item.discription} />
//                          <Button onClick = {() => handleClick(item)} type="primary" className="submit" danger>
//                          Add to card
//                        </Button>
//                     </Card>
//                   );
//                 })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   )

// }

// export default Toner;