import React, { Component,Fragment } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import './style.less'
export default class Home extends Component {
    render(){
        return (
             <Fragment>
                 <div className='HomeWrapper'>
                    <div className='HomeLeft'>
                        <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                        <Topic />
                        <List />
                    </div>
                    <div className='HomeRight'>
                        <Writer />
                        <Recommend />
                    </div>
                 </div>
             </Fragment>
        )
    }
}