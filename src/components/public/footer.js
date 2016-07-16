import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'

class Footer extends Component {
    render() {
        return (
            <div className="want-footer-box">
                <div className="want-footer-midbox">
                    <div className="want-footer-left">
                        <div className="want-footer-slogan">
                            Discover the best products on Amazon,<br/>
                            curated by a community with great taste.
                        </div>
                        <div className="want-footer-link">
                            <span>About</span>
                            <span>App</span>
                            <span>Add</span>
                            <span>products</span>
                            <span>Press</span>
                            <span>Blog</span>
                        </div>
                        <div className="want-footer-icp">
                            Canopy is an independent company. Amazon is a trademarked brand.<br/>
                            ©2016 Canopy.co. All rights reserved.
                        </div>
                        <div className="want-footer-team">
                            <span>Terms</span>
                            <span>Privacy</span>
                            <span>Directory</span>
                            <span>Send feedback</span>
                        </div>
                        <div className="want-footer-media">
                            < img src="http://7xwfiz.com1.z0.glb.clouddn.com/weibo.svg"/>
                            < img src="http://7xwfiz.com1.z0.glb.clouddn.com/facebook.svg"/>
                            < img src="http://7xwfiz.com1.z0.glb.clouddn.com/twitter.svg"/>
                            < img src="http://7xwfiz.com1.z0.glb.clouddn.com/dribbble.svg"/>
                            < img src="http://7xwfiz.com1.z0.glb.clouddn.com/instagram.svg"/>
                        </div>
                    </div>
                    <div className="want-footer-right">
                        <div className="want-footer-cutline"></div>
                        <div className="want-footer-app">
                            <div >
                                <img className="want-footer-app-icon" src="http://7xwfiz.com1.z0.glb.clouddn.com/wantlogo.png"/>
                            </div>
                            <div className="want-footer-app-plant">
                                <span>NOW ON iOS</span>
                            </div>
                            <div className="want-footer-app-remmend">
                                Explore Canopy from your phone.<br/>
                                Download for iOS or Android.
                            </div>
                            <div className="want-footer-app-link">
                                Learn more
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
