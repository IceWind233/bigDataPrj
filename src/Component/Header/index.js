import React from 'react';

import {GithubOutlined, HomeOutlined, MessageOutlined} from '@ant-design/icons';

import MyNavLink from "../MyNavLink";
import './index.css'
import {Navigate, useRoutes} from "react-router-dom";
import Home from "./Page/Home";
import WorldViews from "./Page/WorldViews";
import ChineseViews from "./Page/ChineseViews";
import News from "./Page/News";

function Header(props){
    const element = useRoutes([
        {
            path:'/page/home',
            element:<Home/>
        },
        {
            path:'/page/worldviews',
            element:<WorldViews/>
        },
        {
            path:'/page/chineseviews',
            element:<ChineseViews/>
        },
        {
            path:'/page/news',
            element:<News/>
        },
        {
            path: '/',
            element: <Navigate to="/page/home"></Navigate>
        }
    ])
    return (
        <div>
            <div id='Header'>
                <span className='headerTitle'>COVID-19 数据统计</span>
                <span id="routes">
                    <MyNavLink to='/page/home'><HomeOutlined /> Home</MyNavLink>
                    <MyNavLink to='/page/worldviews'><ion-icon name="earth-outline"></ion-icon> WorldViews</MyNavLink>
                    <MyNavLink to='/page/chineseviews'><ion-icon name="compass-outline"></ion-icon>  ChineseViews</MyNavLink>
                    <MyNavLink to='/page/news'><MessageOutlined /> News</MyNavLink>
                </span>
                <span className='githubBtn'>
                <a className='ghBtn' href='//github.com/' target='_blank'>
                    <span><GithubOutlined/></span>
                </a>
            </span>

            </div>
            <div id="showRouter">
                {element}
            </div>
        </div>
    );
}

export default Header;