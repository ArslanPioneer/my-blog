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
                        <List />
                    </div>
                 </div>
                 <div className='HomeRight'>
                        <Writer />
                        <Recommend />
                 </div>
             </Fragment>
        )
    }
}