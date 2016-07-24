import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'



class BriefHeader extends Component {
  render(){
    const {header} = this.props;


    return (
      <div className="want-brief-header">
        <div className="want-brief-header-left">
          <img src="http://7xwfiz.com1.z0.glb.clouddn.com/like.svg"/>
        </div>
        <div className="want-brief-header-left">
          <img src="http://7xwfiz.com1.z0.glb.clouddn.com/save.svg"/>
        </div>

        <div className="want-brief-header-right"  >
          <div className="want-brief-header-up">
            ￥{header.commodityPrice}
          </div>

        </div>

      </div>
    )
  }
}

export default BriefHeader;