import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import MerchantInfo from './MerchantInfoComponent';

class MerchantDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMerchant: null
        };
    }

    onCampsiteSelect(merchant) {
        this.setState({selectedMerchant:merchant});
    }

    render(){
        const directory = this.props.merchants.map(merchant => {
            return (
                <div key={merchant.id} className="col-md-5 m-1">
                    <Card onClick = {() => this.onCampsiteSelect(merchant)}>
                        <CardImg width="100%" src={merchant.image} alt={merchant.name} />
                        <CardImgOverlay>
                            <CardTitle>{merchant.name}</CardTitle>
                        </CardImgOverlay>
                        <CardBody>
                            <CardTitle>{merchant.name}</CardTitle>
                            <CardText>{merchant.description}</CardText>
                        </CardBody>
                        
                    </Card>
                </div>
            );
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <MerchantInfo merchant={this.state.selectedMerchant}/>
                </div>
            </div>
        );
    }
}

export default MerchantDirectory;
