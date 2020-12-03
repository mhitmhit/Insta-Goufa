import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDirectoryItem({merchant, onClick}){
    return (
        <Card onClick = {() => onClick(merchant)}>
            <CardImg width="100%" src={merchant.image} alt={merchant.name} />
            {/* <CardImgOverlay>
                <CardTitle>{merchant.name}</CardTitle>
            </CardImgOverlay> */}
            <CardBody>
                <CardTitle>{merchant.name}</CardTitle>
                <CardText>{merchant.description}</CardText>
            </CardBody>
        </Card>
    )
}


function MerchantDirectory(props){
    const directory = props.merchants.map(merchant => {
        return (
            <div key={merchant.id} className="col-md-4">
                <RenderDirectoryItem merchant= {merchant} onClick={props.onClick} />
            </div>
        );
    })
    return (
        <div className="container">
            <div className="row mx-auto">
                  <h3>Browse our Partner Merchants:</h3>  
            </div>
            <div className="row">
                    {directory}
            </div>
        </div>
    );
    
}

export default MerchantDirectory;