import React, {Component} from 'react';

import Big from './Big'
import ListView from "./ListView";
import StaView from "./StaView";

class Views extends Component {
    render() {
        return (
            <div>
                <Big/>
                <ListView/>
                <StaView/>
            </div>
        );
    }
}

export default Views;