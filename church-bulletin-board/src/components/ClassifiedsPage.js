import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateClassifiedAd from './CreateClassifiedAd';
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
						props.deleteClassified(props.ad._id);
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

export default class ClassifiedsPage extends Component {
	constructor(props) {
		super(props);

		this.deleteClassified = this.deleteClassified.bind(this);
		this.submitNewAd = this.submitNewAd.bind(this);
		// this.updateAd = this.updateAd.bind(this);

		this.state = { classifiedAds: [] };
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/classifieds/')
			.then((response) => {
				this.setState({ classifiedAds: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	deleteClassified(id) {
		axios.delete('http://localhost:4000/classifieds/' + id)
			.then((response) => {console.log(response.data);
		});

		this.setState({
			classifiedAds: this.state.classifiedAds.filter((el) => el._id !== id)
		});
	}

	componentDidUpdate() {
		axios
			.get('http://localhost:4000/classifieds/')
			.then((response) => {
				this.setState({ classifiedAds: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	// classifiedList() {
	// 	return this.state.classifiedAds.map(function(currentAds, i) {
	// 		return <Ads classifiedAds={}  />;
	// 	})
	// classifiedList() {
	// 	return this.state.classifiedAds.map(function(currentAd, i) {
	// 		return <Ads ad={currentAd}  key={i} />;
	// 	})
	// }
	classifiedList() {
		return this.state.classifiedAds.map((currentAd) => {
			console.log(currentAd);
			return <Ads ad={currentAd} deleteClassified={this.deleteClassified} key={currentAd._id} />;
		});
	}

	

	submitNewAd(newAd) {
		let ads = this.state.classifiedAds;
		ads.push(newAd);
		this.setState({ classifiedAds: ads });
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
			<div className="classifiedspage" >
				<h1>Classifieds</h1>
				</div>
				<div>
					<CreateClassifiedAd submitAd={this.submitNewAd.bind(this)}/>
				
				</div>
				<div className="card-deck">{this.classifiedList()}</div>
			
			</div>
		);
	}
}


