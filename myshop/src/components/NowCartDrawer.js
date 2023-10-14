import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import products from '../products.json'
import Useradressform from './Useradressform';
import Cartdrawer from './Cartdrawer';

const NowCartDrawer = (props) => {
    
  
  
  
    
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  
  
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          CART
        </Button>
      </Space>
      <Drawer
        title="CART"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p></p>
        <p></p>
        <p></p>
        <Useradressform/>
        <button >Order Now</button>
      </Drawer>
    </>
  );
};
export default NowCartDrawer;