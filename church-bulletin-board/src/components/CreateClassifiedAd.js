import React, { Component } from 'react';
// import axios from 'axios';
import './StickyNote.css';

export default class CreateClassifiedAd extends Component {
	constructor(props) {
		super(props);

		this.onChangeAdTitle = this.onChangeAdTitle.bind(this);
		this.onChangeAdPrice = this.onChangeAdPrice.bind(this);
		this.onChangeAdDescription = this.onChangeAdDescription.bind(this);
		this.onChangeAdContactName = this.onChangeAdContactName.bind(this);
		this.onChangeAdContactPhone = this.onChangeAdContactPhone.bind(this);
		this.onChangeAdContactEmail = this.onChangeAdContactEmail.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			ad_title: '',
			ad_price: '',
			ad_description: '',
			ad_contactName: '',
			ad_contactPhone: '',
			ad_contactEmail: ''
		};
	}

	onChangeAdTitle(e) {
		this.setState({
			ad_title: e.target.value
		});
	}

	onChangeAdPrice(e) {
		this.setState({
			ad_price: e.target.value
		});
	}

	onChangeAdDescription(e) {
		this.setState({
			ad_description: e.target.value
		});
	}

	onChangeAdContactName(e) {
		this.setState({
			ad_contactName: e.target.value
		});
	}

	onChangeAdContactPhone(e) {
		this.setState({
			ad_contactPhone: e.target.value
		});
	}

	onChangeAdContactEmail(e) {
		this.setState({
			ad_contactEmail: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(`Form submitted:`);
		console.log(`Ad Title: ${this.state.ad_title}`);
		console.log(`Ad Price: ${this.state.ad_price}`);
		console.log(`Ad Description: ${this.state.ad_description}`);
		console.log(`Ad Contact Name: ${this.state.ad_contactName}`);
		console.log(`Ad Contact Phone: ${this.state.ad_contactPhone}`);
		console.log(`Ad Contact Email: ${this.state.ad_contactEmail}`);

		const newAd = {
			ad_title: this.state.ad_title,
			ad_price: this.state.ad_price,
			ad_description: this.state.ad_description,
			ad_contactName: this.state.ad_contactName,
			ad_contactPhone: this.state.ad_contactPhone,
			ad_contactEmail: this.state.ad_contactEmail
		};

		console.log(newAd);

		// MAKE SURE THIS LINES UP WITH BACK END!!

		// axios.post('https://localhost:4000/CreateClassifiedAd/add', newAd)
		// 	.then(result => console.log(res.data));

		this.setState({
			ad_title: '',
			ad_price: '',
			ad_description: '',
			ad_contactName: '',
			ad_contactPhone: '',
			ad_contactEmail: ''
		});
	}

	render() {
		return (
			<div>
				{/* Button trigger modal  */}
				<button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModalLong">
					Create a Classifed Ad
				</button>
				{/* Modal */}
				<div
					className="modal fade"
					id="exampleModalLong"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLongTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLongTitle">
									Classifed Ad
								</h5>
								<button
									type="button"
									className="close glyphicon glyphicon-remove"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form onSubmit={this.onSubmit}>
									<div className="form-group">
										<label>Title: </label>
										<input
											type="text"
											className="form-control"
											value={this.state.ad_title}
											onChange={this.onChangeAdTitle}
										/>
									</div>
									<div className="form-group">
										<label>Price: </label>
										<input
											type="text"
											className="form-control"
											value={this.state.ad_price}
											onChange={this.onChangeAdPrice}
										/>
									</div>
									<div className="form-group">
										<label>Description: </label>
										<textarea
											type="text"
											className="form-control"
											value={this.state.ad_description}
											onChange={this.onChangeAdDescription}
										/>
									</div>
									<div className="form-group">
										<label>Contact Name:</label>
										<input
											type="text"
											className="form-control"
											value={this.state.ad_contactName}
											onChange={this.onChangeAdContactName}
										/>
									</div>
									<div className="form-group">
										<label>Contact Phone:</label>
										<input
											type="text"
											className="form-control"
											value={this.state.ad_contactPhone}
											onChange={this.onChangeAdContactPhone}
										/>
									</div>
									<div className="form-group">
										<label>Contact Email:</label>
										<input
											type="text"
											className="form-control"
											value={this.state.ad_contactEmail}
											onChange={this.onChangeAdContactEmail}
										/>
									</div>
									<div className="form-group">
									<input className="btn btn-dark"
										type="submit"
										data-dismiss="modal"
										value="SUBMIT Advertisement"									
									/>
								</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
