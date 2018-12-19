import React, {Component,Fragment} from 'react';
import {Avatar,Button,Icon} from 'antd';
import { connect } from 'react-redux';
import Logo from './../../static/logo.jpg';
import './header.less';
class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className='header'>
                    <Avatar className='logo' src={Logo}/>
                    <div className='nav'>
                        <div className='nav-item left'><Icon type="home" theme="filled" />首页</div>
                        <div className='nav-item left'><Icon type="book" theme="filled" />热门文章</div>
                        <div className='nav-item left'><Icon type="heart" theme="filled" />日记</div>
                        <div className='nav-item right'><Icon type="github" theme="filled" />关于</div>
                    </div>
                    <div className='inf'>
                        <Button className='register'>注册</Button>
                        <Button className='login' type='primary'>登陆</Button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToprops=(state)=> {

}

const mapDispatchToprops=(dispatch)=>{

}

export default connect(mapStateToprops,mapDispatchToprops)(Header);