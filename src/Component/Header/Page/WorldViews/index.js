import React, {Component} from 'react';

import ListView from "./ListView";
import StaView from "./StaView";
import './index.css'

class Views extends Component {
    render() {
        return (
            <div id="views">
                <ListView/>
                <StaView/>
            </div>
        );
    }
}

export default Views;