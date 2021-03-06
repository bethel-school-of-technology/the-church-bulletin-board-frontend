import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import ClassifiedsPage from './components/ClassifiedsPage';
import ServicesPage from './components/ServicesPage';
import EventsPage from './components/EventsPage';
import Navbar from './components/Navbar';
import EditAd from './components/EditAd';


function App() {
	return (
		<Router>
			
			<Navbar />
			
			
			<br />
			<Route path="/" exact component={HomePage} />
			<Route path="/classifieds" component={ClassifiedsPage} />
			<Route path="/services" component={ServicesPage} />
			<Route path="/events" component={EventsPage} />
			<Route path="/edit/:id" component={EditAd}/>
		</Router>
	);
}

export default App;

