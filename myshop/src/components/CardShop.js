import React from 'react';
import products from '../products.json';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const CardShop = ({product, showCartDrawer}) => {
    const {id, title, price, image, desc} = product;
    return(
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img className='pImage'
        alt=""
        src={image}
      />
    }
    actions={[
      <SettingOutlined key="setting" onClick={()=>showCartDrawer(product)} />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title={title}
      description={desc}
    />
  </Card>)
};
export default CardShop;