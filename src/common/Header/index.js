import React, {Component,Fragment} from 'react';
import {Avatar,Button} from 'antd';
import Logo from './../../static/logo.jpg';
import './header.less';
class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className='header'>
                    <Avatar className='logo' src={Logo}/>
                    <div className='nav'>
                        <div className='nav-item left'>首页</div>
                        <div className='nav-item left'>热门文章</div>
                        <div className='nav-item left'>日记</div>
                        <div className='nav-item right'>关于</div>
                    </div>
                    <div className='inf'>
                        <Button className='register' >注册</Button>
                        <Button className='login' type='primary'>登陆</Button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Header;