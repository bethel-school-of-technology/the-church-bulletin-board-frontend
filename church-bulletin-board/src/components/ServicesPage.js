import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateServiceAd from './CreateServiceAd';
// import EditAd from './EditAd';
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
						props.deleteService(props.ad._id);
					}}>Delete</a>
			</div>
		</div>
	</div>
);


export default class ServicesPage extends Component {
	constructor(props) {
		super(props);

		this.deleteService = this.deleteService.bind(this);

		this.state = { serviceAds: [] };
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/services/')
			.then((response) => {
				this.setState({ servicesAds: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	deleteService(id) {
		axios.delete('http://localhost:4000/services/' + id)
			.then((response) => {console.log(response.data);
		});

		this.setState({
			serviceAds: this.state.serviceAds.filter((el) => el._id !== id)
		});
	}

	componentDidUpdate() {
		axios
			.get('http://localhost:4000/services/')
			.then((response) => {
				this.setState({ serviceAds: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	serviceList() {
		return this.state.serviceAds.map((currentAd) => {
			console.log(currentAd);
			return <Ads ad={currentAd} deleteService={this.deleteService} key={currentAd._id} />;
		});
	}

	

	submitNewAd(newAd) {
		let ads = this.state.serviceAds;
		ads.push(newAd);
		this.setState({ serviceAds: ads });
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
             
            <div >
                <div className="servicespage">
				<h1>Services</h1>
				</div>
				<div>
					<CreateServiceAd submitAd={this.submitNewAd.bind(this)}/>
				
				</div>
				<div className="card-deck">{this.serviceList()}</div>
			
			</div>
		);
	}
}
