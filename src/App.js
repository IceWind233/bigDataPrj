import React, {Component} from 'react';


import Header from "./Component/Header";
import Views from "./Component/Header/Page/WorldViews";
import {Navigate, useRoutes} from "react-router-dom";
import Home from "./Component/Header/Page/Home";
import WorldViews from "./Component/Header/Page/WorldViews";
import ChineseViews from "./Component/Header/Page/ChineseViews";
import News from "./Component/Header/Page/News";

function App() {

    return (
        <div>
            <Header/>

        </div>
    );
}

export default App;