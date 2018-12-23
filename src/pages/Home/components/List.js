import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
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
              <div className="ListItem">
                <img src={item.imgUrl} className="pic" />
                <div className="listInfo">
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                </div>
              </div>
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
