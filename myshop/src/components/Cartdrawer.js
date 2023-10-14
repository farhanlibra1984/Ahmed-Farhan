import React from 'react';
import {Button, Drawer } from 'antd';
import products from '../products.json'
import NowCartDrawer from './NowCartDrawer';
import useState from 'react';
const Cartdrawer = (props) => {
  const {open, selectedProduct, closeCartDrawer, cartProduct}=props;
  
  
  
  
  return (
    <>
      
      <Drawer title={selectedProduct.title} placement="right" onClose={props.closeCartDrawer} open={open}>
        <p><img src={selectedProduct.image}></img> </p>
        <p>{selectedProduct.desc} </p>
        <p>Price:{selectedProduct.price}</p>
        <button><NowCartDrawer/></button>
      </Drawer>
    </>
  );
};
export default Cartdrawer;