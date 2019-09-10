import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar-light bg-dark navbar-expand-lg ">
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mx-auto">
						<li className="navbar-item">
							<Link to="/" className="navbar-link">
								Home
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="./classifieds" className="nav-link">
								Classifieds
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="./services" className="nav-link">
								Services
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="./events" className="nav-link">
								Events
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
