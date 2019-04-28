import React from 'react'
import { Row,Col } from "antd"
import './index.less'
import { ApiWeather } from '../../request'
// import { connect } from 'react-redux'
class Header extends React.Component{
    constructor (props) {
      super()
      this.state = {
        cityCode: '310000',
        weatherData: {}
      }
    }
    async componentDidMount () {
      let { cityCode } = this.state
      let data = await ApiWeather({
        city: `${cityCode}`,
        output: 'json',
        key: 'e03abd5bdcb8069f377995e3841f0f25'
      })
      this.setState(() => {
        return {
          weatherData: data.lives[0]
        }
      })
    }
    render(){
      const { weatherData } = this.state
        // const { menuName, menuType } = this.props;
        return (
            <div className="header">
                <Row className="header-top">
                    {/* {
                        menuType?
                            <Col span="6" className="logo">
                                <img src="/assets/logo-ant.svg" alt=""/>
                                <span>IMooc 通用管理系统</span>
                            </Col>:''
                    } */}
                    <Col span={6} className="logo">
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <span>IMooc 通用管理系统</span>
                    </Col>
                    <Col span={18}>
                        {/* <span>欢迎，{this.state.userName}</span> */}
                        <span>欢迎，哈哈哈哈</span>
                        <i>退出</i>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                    首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{ weatherData.reporttime && weatherData.reporttime.substring(0, 10) }</span>
                        <span className="city">{ weatherData.city }</span>
                        {/* <span className="weather-img">
                            <img src={ weatherData.dayPictureUrl } alt="" />
                        </span> */}
                        <span className="weather-detail">
                        { weatherData.weather }
                        </span>
                    </Col>
                </Row>
                {/* {
                    menuType?'':
                        <Row className="breadcrumb">
                            <Col span="4" className="breadcrumb-title">
                                {menuName || '首页'}
                            </Col>
                            <Col span="20" className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span className="weather-img">
                                    <img src={this.state.dayPictureUrl} alt="" />
                                </span>
                                <span className="weather-detail">
                                    {this.state.weather}
                                </span>
                            </Col>
                        </Row>
                } */}
            </div>
        );
    }
}
// const mapStateToProps = state => {
//     return {
//         menuName: state.menuName
//     }
// };
// export default connect(mapStateToProps)(Header)
export default Header