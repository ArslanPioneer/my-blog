import React, {Component,Fragment} from 'react';
import { Avatar } from 'antd';
import Logo from './../../static/logo.jpg';
import './header.less';
class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className='header'>
                    <Avatar className='logo' src={Logo}/>
                </div>
            </Fragment>
        )
    }
}

export default Header;