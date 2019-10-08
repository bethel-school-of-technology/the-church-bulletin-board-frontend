import React, { Component } from 'react';
import './StickyNote.css';



export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="mission">
                    <h1>Welcome!</h1>
                    <br></br>
                    <div className="newfont">
                        <h4>This Bulletin Board exists
                            to serve and strengthen our community by
                            connecting people. 
                        </h4>
                        <br></br>
                        <h5>
                        Hebrews 10:24-25 <br></br>And let us consider how we 
                            may spur one another on toward love and good deeds, 
                            not giving up meeting together, as some are in the 
                            habit of doing, but encouraging one another—and all 
                            the more as you see the Day approaching.
                        </h5>

                    </div>
                </div>
            </div>
        )
    }
}
