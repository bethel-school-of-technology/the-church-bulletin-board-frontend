import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateClassifiedAd from './CreateClassifiedAd';
import '../ClassifiedsPage.css';

const Ads = (props) => (
	<div className="card-deck">
		<div className="card" classStyle="width; 25rem;">
			<div className="card-header row">
				<h4 className="card-title justify-content-start">{props.ad.ad_title}</h4>
				<h4 className="card-title justify-content-end">{props.ad.ad_price}</h4>
			</div>
			<div className="card-body">
				<p className="card-text">{props.ad.ad_description}</p>
				<div className="card-text row">
					<h4 className="card-text justify-content-start">{props.ad.ad_contactName}</h4>
					<h4 className="card-text justify-content-center">{props.ad.ad_contactPhone}</h4>
					<h4 className="card-text justify-content-end">{props.ad.ad_contactEmail}</h4>
				</div>
			</div>

			<div className="card-footer">
				<Link to={'/edit/' + props.updateAd._id}>Edit</Link>
			</div>
		</div>
	</div>

	// <div className="card-deck">
	// 	<div className="card container">
	// 		<section className="front">
	// 			<div className="card-body">
	// 				<h4 className="card-title">{props.ad.ad_title}</h4>
	// 				<h3 className="card-price">{props.ad.ad_price}</h3>
	// 				<p className="card-description">{props.ad.ad_description}</p>
	// 			</div>
	// 		</section>
	// 		<section className="back">
	// 			<div className="card-body">
	// 				<p className="card-contact-name">{props.ad.ad_contactName}</p>
	// 				<p className="card-contact-phone">{props.ad.ad_contactPhone}</p>
	// 				<p className="card-contact-email">{props.ad.ad_contactEmail}</p>
	// 				<p className="edit text-muted">
	// 					<Link to={'/edit/' + props.updateAd._id}>Edit</Link>
	// 				</p>
	// 			</div>
	// 		</section>
	// 	</div>
	// </div>

	/* // <tr>
	//     <td>{props.ad.ad_title}</td>
	//     <td>{props.ad.ad_price}</td>
	//     <td>{props.ad.ad_description}</td>
	//     <td>{props.ad.ad_contactName}</td>
	//     <td>{props.ad.ad_contactPhone}</td>
	//     <td>{props.ad.ad_contactEmail}</td>
	//     <td>
	//         <Link to={"/edit/"+props.updateAd._id}>Edit</Link>
	//     </td>
	// </tr> */
);

export default class ClassifiedsPage extends Component {
	constructor(props) {
		super(props);
		this.state = { classifiedAds: [] };
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/classifiedAds/')
			.then((response) => {
				this.setState({ classifiedAds: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	classifiedsList() {
		return this.state.classifiedAds.map(function(currentAds, i) {
			return <Ads ads={currentAds} key={i} />;
		});
	}

	// function flip() {
	// 	$('.card').toggleClass('flipped');
	// }

	render() {
		return (
			<div>
				<h2>Classified Section</h2>
				<div>
					<CreateClassifiedAd />
				</div>

				<div className="card-deck" >
					<div className="card col-lg-4 col-md-6 col-sm-12 text-white 
					 mb-3" >
						<div className="card-header row  justify-content-around">
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
						</div>
						<div className="card-footer">
							{/* <Link to={'/edit/' + props.updateAd._id}>Edit</Link> */}
							<p className="text-muted">Edit</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/* <div className="card-deck">
					<div className="card-container">
						<section className="front">
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<h4 className="card-price">$ </h4>
								<p className="card-description">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
							<button>Click for Contact Info</button>
							 LINE 90 <button onClick="flip()">Click for Contact Info</button>  
						</section>
						<section className="back">
							<p className="card-contact-name">Contact: </p>
							<p className="card-contact-phone text-muted">Phone: </p>
							<p className="card-contact-email text-muted">Email: </p>
						</section>
					</div>
				</div>
			</div>  */
