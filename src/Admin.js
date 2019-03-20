import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './common/style/common.less';

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
            Content
          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}

export default Admin
