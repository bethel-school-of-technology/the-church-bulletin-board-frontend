import React, { Component } from 'react';
import axios from 'axios';
import './StickyNote.css';

export default class CreateEventAd extends Component {
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

		const newAd = {
			title: this.state.ad_title,
			price: this.state.ad_price,
			description: this.state.ad_description,
			contactName: this.state.ad_contactName,
			contactPhone: this.state.ad_contactPhone,
			contactEmail: this.state.ad_contactEmail
		};

		console.log(newAd);

		// MAKE SURE THIS LINES UP WITH BACK END!!
		axios.post('https://localhost:4000/events/add', newAd)
			.then((result) => console.log(result.data));
			

		this.props.submitAd(newAd);
		

		this.setState({
			ad_title: '',
			ad_price: '',
			ad_description: '',
			ad_contactName: '',
			ad_contactPhone: '',
			ad_contactEmail: '',	
		})
		
		// window.location = '/classifieds';	//close modal code needed!
	}
	

	render() {
		return (			
			<div>
				<div className="buttoncss">
				{/* Button trigger modal  */}
				<button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModalLong">
					Create Event
				</button>
				</div>
				{/* Modal */}
				<div
					className="modal fade"
					id="exampleModalLong"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="createAdModalTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="createAdModalTitle">
                                Tell Us About Your Event
								</h5>
							</div>
							<div className="modal-body">
								<form onSubmit={this.onSubmit}>
									<div className="form-row">
										<div className="form-group col-9">
											<label>Title: </label>
											<input
												type="text"
												className="form-control"
												placeholder="Item to be Listed"
												maxLength="40"
												value={this.state.ad_title}
												onChange={this.onChangeAdTitle}
											/>
										</div>

										<div className="form-group col-3">
											<label>Price: </label>
											<input
												type="text"
												className="form-control"
												placeholder="$"
												value={this.state.ad_price}
												onChange={this.onChangeAdPrice}
											/>
										</div>
									</div>
									<div className="form-group">
										<label>Description: </label>
										<textarea
											type="textarea"
											className="form-control"
											maxLength="1000"
											placeholder="Describe item here"
											style={{ height: 200 }}
											value={this.state.ad_description}
											onChange={this.onChangeAdDescription}
										/>
									</div>
									<div className="form-group">
										<label>Contact Name:</label>
										<input
											type="text"
											className="form-control"
											placeholder="John Smith"
											maxLength="30"
											value={this.state.ad_contactName}
											onChange={this.onChangeAdContactName}
										/>
									</div>
									<div className="form-row">
										<div className="form-group col-4">
											<label>Contact Phone:</label>
											<input
												type="tel"
												className="form-control phone"
												pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
												placeholder=" 555 - 123 - 1234"
												value={this.state.ad_contactPhone}
												onChange={this.onChangeAdContactPhone}
											/>
										</div>
										<div className="form-group col-8">
											<label>Contact Email:</label>
											<input
												type="email"
												className="form-control"
												placeholder="emailAddress@email.com"
												value={this.state.ad_contactEmail}
												onChange={this.onChangeAdContactEmail}
											/>
										</div>
									</div>
									<div className="modal-footer">
										<input className="btn btn-dark" type="submit" value="SUBMIT Advertisement"/>
										
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Close
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>			
		);
	}
}
