import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateClassifiedAd from './CreateClassifiedAd';
import '../ClassifiedsPage.css';

const Ads = (props) => (
	<div className="card-deck">
		<div className="card" classstyle="width; 25rem;">
			<div className="card-header row">
				<h4 className="card-title justify-content-start">{props.ad.title}</h4>
				<h4 className="card-title justify-content-end">{props.ad.price}</h4>
			</div>
			<div className="card-body">
				<p className="card-text">{props.ad.description}</p>
				<div className="card-text row">
					<h4 className="card-text justify-content-start">{props.ad.contactName}</h4>
					<h4 className="card-text justify-content-center">{props.ad.contactPhone}</h4>
					<h4 className="card-text justify-content-end">{props.ad.contactEmail}</h4>
				</div>
			</div>

			<div className="card-footer">
				<Link to={'/edit/' + props.ad._id}>Edit</Link> |{' '}
				<button
					 type="button" className="btn btn-secondary" onClick={() => {
						props.deleteClassified(props.ad._id);
					}}>
					delete
				</button>
			</div>
		</div>
	</div>
);

export default class ClassifiedsPage extends Component {
	constructor(props) {
		super(props);
		
		this.deleteClassified = this.deleteClassified.bind(this);

		this.state = { classifiedAds: [] };
	}

	componentDidMount() {
		axios.get('http://localhost:4000/classifieds/')
			.then((response) => {
				this.setState({ classifiedAds: response.data });
			})
			.catch(function(error) {
				console.log(error);
			})
	}
	
	deleteClassified(id) {
		axios.delete('http://localhost:4000/classifieds/' + id)
			.then(response => { console.log(response.data)});

		this.setState({
			classifiedAds: this.state.classifiedAds.filter(el => el._id !== id)
		})
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
	classifiedList() {
		return this.state.classifiedAds.map(function(currentAd, i) {
			return <Ads ad={currentAd}  key={i} />;
		})
	}
	submitNewAd(newAd) {
		let ads=this.state.classifiedAds
		ads.push(newAd)
		this.setState({classifiedAds: ads})
		console.log(ads)
	}

	render() {
		return (
			<div>
				<h2>Classified Section</h2>
				<div>
					<CreateClassifiedAd submitAd={this.submitNewAd.bind(this)}/>
					
				</div>

				<div className="card-deck">
					<div className="card col-lg-4 col-md-6 col-sm-12 text-white 
					 mb-3">
						{this.classifiedList()}
						{/* <div className="card-header row  justify-content-around">
							<h2 className="card-title">ITEM: </h2>
							<h2 className="card-title">$</h2>
						</div>
						<div className="card-body">
							<div className="b-3">
								<p className="card-text text-left pb-5 pl-2 border ">Description: </p>
							</div>
							<div className="card-text row pt-5 justify-content-around">
								<h4 className="card-text">Contact: </h4>
								<h4 className="card-text">Phone: </h4>
								<h4 className="card-text">Email: </h4>
							</div>
						</div> */}
						{/* <div className="card-footer">
							{/* {this.classifiedsList()} */}
						{/* </div> */}                        
					</div>
				</div>
			</div>
		);
	}
}
