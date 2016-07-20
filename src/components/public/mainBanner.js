import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      liked:true
    };
  }

  test3(){
    this.setState({liked: !this.state.liked});
  }

  render(){

    var beings = this.state.liked ? 'want-banner-mask want-mask-opacity-light' : 'want-banner-mask want-mask-opacity-dark';

    return (
      <div className="want-banner-position">
        <div className="want-banner-size">
          <img className="want-banner-img" src="http://7xpmhh.com1.z0.glb.clouddn.com/banner.png" />
        </div>
        <div className={beings}></div>
        <div className="want-banner-inner" onMouseOver={this.test3.bind(this)} onMouseLeave={this.test3.bind(this)}>
          GO BEINGS
        </div>
      </div>
    )
  }
}

export default Banner;