import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './common/style/common.less';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import Home from './pages/home';

export class Admin extends Component {
  render() {
    return (
      <Row className="admin">
        <Col span={3} className="admin__navLeft">
          <NavLeft />
        </Col>
        <Col span={21} className="admin__main">
          <Header />
          <Row className="admin__content">
            <Home />
          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}

export default Admin
