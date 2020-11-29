import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { MERCHANTREVIEWS } from '../../shared/merchantsData/merchantReviews';

class MerchantInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merchantReviews: MERCHANTREVIEWS
        };
    }
    
    renderMerchant(merchant){
        if (merchant) {
            return (
                <Card>
                    <CardImg width="100%" src={merchant.image} alt={merchant.name} />
                    <CardBody>
                            <CardTitle>{merchant.name}</CardTitle>
                            <CardText>{merchant.description}</CardText>
                        </CardBody>
                </Card>
            )
        }
        return <div />;
    }

    renderMerchantReviews(merchant){
        if (merchant){
            const comts = this.state.merchantReviews.filter(rev => rev.merchantID==merchant.id)
            const comts1 = comts.map(comment=> (<div key={comment.id}>{comment.text} <br />--{comment.author}  
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(
                    new Date(Date.parse(comment.date)))}<br /><br /></div>))
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comts1}
                </div>
            )
        }
        return <div />;
    }

    render(){
            return (
                <div>
                    {this.renderMerchant(this.props.merchant)}
                    {this.renderMerchantReviews(this.props.merchant)}
                </div>
        );
    }
}

export default MerchantInfo;