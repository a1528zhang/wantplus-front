import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { render } from 'react-dom';

class App extends Component {
  render() {
    const { data,putData} = this.props;
    return (
      <div>
        <button onClick={() =>putData("putdata")}>获取数据</button>
        <p>print:{data}</p>
      </div>
    )
  }
}

App.propTypes = {
  //data必须为字符串，且必须存在
  data:PropTypes.string.isRequired
};

export default App;