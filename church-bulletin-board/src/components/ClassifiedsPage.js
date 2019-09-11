import React, { Component } from 'react';
import CreateAd from './CreateAd';


export default class ClassifiedsPage extends Component {
    render() {
        return (
            <div>
                <h1>You are on the Classifieds Page!</h1>
                <CreateAd />
                <p>this is where you place your ad</p>

            </div>
        )
    }
}
