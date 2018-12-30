import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import './style.less';
class Detail extends Component {

    componentDidMount(){
    
        this.props.Detail();
    }
    
    render(){
       
        return (
            <Fragment>
                 <div className='detail'>
                    <div className='title'>{this.props.title}</div>
                
                    <div className='content' dangerouslySetInnerHTML={{__html:this.props.content}}>
                      
                    </div>
                 </div>
            </Fragment>
        )
    }
}

const mapState=(state)=>(
    {
        title:state.detail.title,
        content:state.detail.content
    }
)

const mapDispatch=(dispatch)=> (
    {
        Detail(){
        
         const action =actionCreators.getDetail();
         dispatch(action);
        }
    }
)
export default connect(mapState,mapDispatch)(Detail);