import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { USER_HEAD_IMG } from '../../../constants/constant'



class BriefFooter extends Component {


    render(){
        let userHeadImg = USER_HEAD_IMG

        let briefHeadImg = userHeadImg.map(
          function(data,index){
              let headImgStyle = {
                  marginLeft:index * 24+'px',
                  zIndex:6 - index
              };

              return(
                  <div className="want-brief-userbox" key={data.userId} style={headImgStyle}>
                      <div></div>
                      <img src={data.commodityImg}/>
                  </div>
              )
          }
        );
        return (
            <div className="want-brief-footer" >
                {briefHeadImg}
            </div>
        )
    }
}

export default BriefFooter;