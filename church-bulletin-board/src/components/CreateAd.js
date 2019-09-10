import React, { Component } from 'react';

export default class CreateAd extends Component {

    constructor(props) {
        super(props);

        this.onChangeAdTitle = this.onChangeAdTitle.bind(this);
        this.onChangeAdPrice = this.onChangeAdPrice.bind(this);
        this.onChangeAdDescription = this.onChangeAdDescription.bind(this);
        this.onChangeAdContactName = this.onChangeAdContactName.bind(this);
        this.onChangeAdContactEmail = this.onChangeAdContactEmail.bind(this);


        this.state = {
            ad_title: '',
            ad_price: '',
            ad_description: '',
            ad_contactName: '',
            ad_contactEmail: ''
        }
    }

    onChangeAdTitle(e) {
        this.setState({
            ad_title: e.target.value
        });
    }

    onChangeAdPrice(e) {
        this.setState({
            ad_price: e.target.value
        })
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
        console.log(`Ad Contact Email: ${this.state.ad_contactEmail}`);


        this.setState({
            ad_title: '',
            ad_price: '',
            ad_description: '',
            ad_contactName: '',
            ad_contactEmail: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Create an Advertisement</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" className="form-control"
                            value={this.state.ad_title} onChange={this.onChangeAdTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text" className="form-control"
                            value={this.state.ad_price} onChange={this.onChangeAdPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea type="text" className="form-control"
                            value={this.state.ad_description} onChange={this.onChangeAdDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Name:</label>
                        <input type="text" className="form-control"
                            value={this.state.ad_contactName} onChange={this.onChangeAdContactName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Email:</label>
                        <input type="text" className="form-control"
                            value={this.state.ad_contactEmail} onChange={this.onChangeAdContactEmail}
                        />
                    </div>
                </form>  
            </div>
        )
    }
}
