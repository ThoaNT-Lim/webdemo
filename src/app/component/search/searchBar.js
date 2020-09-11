import React, {Component, Fragment} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { Input } from 'antd';
import {search} from './action';
import "../../../assets/styles/header.scss";

class SearchBar extends Component {
  render() {
    const {search, value, results} = this.props;
    console.log(results, 'reé')
    const handleSearch = (value) => {
      search(value);
    }
    return (
      <Fragment>
        <Input
          className="app-search"
          placeholder = "Tìm kiếm"
          onChange={(e) => search(e.target.value)}
          onPressEnter={(e) => handleSearch(e.target.value)}
          value={value} />
          {console.log(results.length)}
      </Fragment>
    );
  }
} 
  function mapStateToProps(state) {
    const results = state.searchReducer.works;
    const value = state.searchReducer.value;
    return {
      results,
      value,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({search}, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);