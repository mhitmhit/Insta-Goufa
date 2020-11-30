import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class MerchantDirectory extends Component {

    render(){
        const directory = this.props.merchants.map(merchant => {
            return (
                <div key={merchant.id} className="col-md-5 m-1">
                    <Card onClick = {() => this.props.onClick(merchant)}>
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

            </div>
        );
    }
}

export default MerchantDirectory;