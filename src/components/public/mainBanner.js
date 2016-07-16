import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

class Banner extends Component {
  render(){

    return (
      <div className="want-banner-position">
        <div className="want-banner-size">
          <img className="want-banner-img" src="http://7xpmhh.com1.z0.glb.clouddn.com/banner.png" />
        </div>
        <div className="want-banner-mask"></div>
        <div className="want-banner-inner">
          GO BEINGS
        </div>
      </div>
    )
  }
}

export default Banner;