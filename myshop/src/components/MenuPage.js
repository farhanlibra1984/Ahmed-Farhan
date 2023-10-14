import React   from 'react';
import CardShop from './CardShop';
import {Col, Row} from 'antd';
import products from '../products.json';
import Cartdrawer from './Cartdrawer';
import { useState } from 'react';

import Testform from './Testform';







function MenuPage() {

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct]=useState({})
  const showCartDrawer = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  const closeCartDrawer = () => {
    setOpen(false);
  };

  return (
    <>

        <img className='header' src='images/mainphoto.jpg'/><br /> <br />
        <div className="hed"> <h1>ALNAFAY GENERAL STORE</h1>
        <h4>Order Online - Free Home Delivery- Payment Online or Cash on Delivery</h4>
        </div>
        <Testform/>
       
        <Cartdrawer open={open} closeCartDrawer={closeCartDrawer} selectedProduct={selectedProduct} />
      
        <Row gutter={16}>
         
        
          {
          
          products.map(p=> {
            
          return(
            <Col span={6}>
          <CardShop key={p.id} product={p} showCartDrawer={showCartDrawer} />
          </Col>
          )})
          
          }
         
        
          

        </Row>
        
        
        <button className="primary" >User Information</button>

    
    </>
  )
}

export default MenuPage