import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { USER_HEAD_IMG } from '../../../constants/constant'



class BriefFooter extends Component {


    render(){
        let userHeadImg = USER_HEAD_IMG

        let briefHeadImg = userHeadImg.map(
          function(data){
              return(
                  <img src={data.commodityImgUrl}/>
              )
          }
        );
        return (
            <div className="want-brief-footer">
                <div className="want-brief-userbox">
                    {briefHeadImg}
                </div>
            </div>
        )
    }
}

export default BriefFooter;