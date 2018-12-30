import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.less';
class List extends Component {
  render() {
    const { list } = this.props;
    //debugger;
    return (
      <Fragment>
        <div>
          {list.map(item => {
            return (
              <Link to={'/details/'+item.id}>
              <div className="ListItem">
                <img src={item.imgUrl} className="pic" />
                <div className="listInfo">
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToprops = state => ({
  list: state.home.articleList
});

const mapDispatchToprops = dispatch => ({});
export default connect(
  mapStateToprops,
  mapDispatchToprops
)(List);
