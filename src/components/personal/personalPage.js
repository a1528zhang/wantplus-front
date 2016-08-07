import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import 'whatwg-fetch';

class personalPage extends Component {
    handleClicked(){
        let st = "";
        //$.ajax("http://121.42.136.146/wantplus/action/commodity/getAllLCommodity?page=1", {
        $.ajax("http://121.42.136.146/wantplus/action/commodity/getAllLCommodity?page=1", {
            type: "GET",
            async: false,
            success: function(result) {
                console.log(JSON.parse(result));
                let data = JSON.parse(result);
                st =data.state;
            }
        });
        console.log("st =" +st);
    }
    render() {
        return(
            <div onClick={this.handleClicked.bind(this)}>点我点我！</div>
        )
    }
}

export default personalPage;