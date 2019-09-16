import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateClassifiedAd from './CreateClassifiedAd';
import FlippingCardPage from './FlippingCardPage';

const Ads = props => (
    <tr>
        <td>{props.ad.ad_title}</td>
        <td>{props.ad.ad_price}</td>
        <td>{props.ad.ad_description}</td>
        <td>{props.ad.ad_contactName}</td>
        <td>{props.ad.ad_contactPhone}</td>
        <td>{props.ad.ad_contactEmail}</td>
        <td>
            <Link to={"/edit/"+props.updateAd._id}>Edit</Link>
        </td>
    </tr>
)

export default class ClassifiedsPage extends Component {

    constructor(props) {
        super(props);
        this.state = { classifiedAds: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/classifiedAds/')  
            .then(response => {
                this.setState({classifiedAds: response.data})
            })
            .catch(function (error) {
                console.log(error);
        })
    }

    classifiedsList() {
        return this.state.classifiedAds.map(function (currentAds, i) {
            return <Ads ads={currentAds} key={i} />
        })
    }

    render() {
        return (
            <div> 
                <div>
                <CreateClassifiedAd />
                </div>
                
                <h3>
                    Classified Section
                </h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Contact Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.classifiedsList()}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
