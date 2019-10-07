import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateEventAd from './CreateEventAd';
import EditAd from './EditAd';
import '../ClassifiedsPage.css';

const Ads = (props) => (
	<div className="card-wrapper col-lg-4 col-md-6 col-sm-12">
		<div className="card">
			<div className="card-header row justify-content-around">
				<h4 className="card-title">{props.ad.title}</h4>
				<h4 className="card-title">$ {props.ad.price}</h4> 
			</div>
			<div className="card-body">
				<p className="card-text">{props.ad.description}</p>
				<div className="card-text row justify-content-around text-muted">
					<h4 className="card-text">Contact: {props.ad.contactName}</h4>
					<h4 className="card-text">{props.ad.contactPhone}</h4>
					<h4 className="card-text">{props.ad.contactEmail}</h4>
				</div>
			</div>

			<div className="card-footer row justify-content-around">
				<Link to={'/edit/' + props.ad._id}>Edit</Link> | <a href="#" onClick={() => {
						props.deleteEvent(props.ad._id);
					}}>Delete</a>
				 {/* <div>
					<EditAd edit={props.ad._id}/>
				</div> */}
				{/* <button
					type="button"
					className="btn btn-secondary"
					onClick={() => {
						props.deleteClassified(props.ad._id);
					}}
				>
					delete
				</button>  */}
			</div>
		</div>
	</div>
);

export default class EventsPage extends Component {
	constructor(props) {
		super(props);

		this.deleteEvent = this.deleteEvent.bind(this);

		this.state = { events: [] };
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/events/')
			.then((response) => {
				this.setState({ events: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	deleteEvent(id) {
		axios.delete('http://localhost:4000/events/' + id)
			.then((response) => {console.log(response.data);
		});

		this.setState({
			events: this.state.events.filter((el) => el._id !== id)
		});
	}

	componentDidUpdate() {
		axios
			.get('http://localhost:4000/events/')
			.then((response) => {
				this.setState({ events: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	eventList() {
		return this.state.events.map((currentAd) => {
			console.log(currentAd);
			return <Ads ad={currentAd} deleteEvent={this.deleteEvent} key={currentAd._id} />;
		});
	}

	

	submitNewAd(newAd) {
		let ads = this.state.events;
		ads.push(newAd);
		this.setState({ events: ads });
		console.log(ads);
	}

	// updateAd(updateAd) {
	// 	let ads = this.state.classifiedAds;
	// 	ads.push(updateAd);
	// 	this.setState({ classifiedAds: ads });
	// 	console.log(ads);
	// }

	render() {
		return (
			<div>
			<div className="eventspage" >
				<h1>Area Events</h1>
				</div>
				<div>
					<CreateEventAd submitAd={this.submitNewAd.bind(this)}/>
				
				</div>
				<div className="card-deck">{this.eventList()}</div>
			
			</div>
		);
	}
}