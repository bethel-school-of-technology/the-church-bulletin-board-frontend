import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StickyNote.css'

export default class StickyNote extends Component {
	render() {
		return (
			<div className='StickyNote'>
				<nav className="navbar-dark bg-dark navbar-expand-lg">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<ul className="navbar-nav mx-auto">

							<li className="navbar-item">
								<Link to="/" className="nav-link">Home</Link>
							</li>
							<li className="navbar-item">
								<Link to="./classifieds" className="nav-link">Classifieds</Link>
							</li>
							<li className="navbar-item">
								<Link to="./services" className="nav-link">Services</Link>
							</li>
							<li className="navbar-item">
								<Link to="./events" className="nav-link">Events</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
