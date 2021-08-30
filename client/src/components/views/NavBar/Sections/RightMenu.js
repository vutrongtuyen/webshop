/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Đăng xuất không thành công')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Đăng nhập</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Đăng ký</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>

        <Menu.Item key="history">
          <a href="/history">Lịch sử</a>
        </Menu.Item>

        <Menu.Item key="upload">
          <a href="/product/upload">Thêm sản phẩm</a>
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ marginRight: 0, color:'#667777'}}>
              <Icon type="shopping-cart" style={{ fontSize: 25, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>


        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Đăng xuất</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

