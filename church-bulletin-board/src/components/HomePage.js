import React, { Component } from 'react';
import StickyNote from './StickyNote';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>You are on the Home Page!</h1>
                <p>Hi Darla!!!</p>
                <StickyNote />
            </div>
        )
    }
}
