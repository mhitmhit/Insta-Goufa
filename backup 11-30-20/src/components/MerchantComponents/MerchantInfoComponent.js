import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

 function RenderMerchant({merchant}){
    if (merchant) {
        return (
            <div key={merchant.id} className="col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={merchant.image} alt={merchant.name} />
                    <CardBody>
                            <CardTitle>{merchant.name}</CardTitle>
                            <CardText>{merchant.description}</CardText>
                        </CardBody>
                </Card>
            </div>
        )
    }
    return <div />;
}

 function RenderMerchantReviews({comments}){
    if (comments){
        const comts1 = comments.map(comment=> (<div key={comment.id}>{comment.text} <br />--{comment.author}  
            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(
                new Date(Date.parse(comment.date)))}<br /><br /></div>)); 
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comts1}
            </div>
        )
    }
    return <div />;
}

function MerchantInfo(props){
    return (
        <div>
            <RenderMerchant merchant={props.merchant} />
            <RenderMerchantReviews comments={props.comments} />
        </div>
    );
}

export default MerchantInfo;