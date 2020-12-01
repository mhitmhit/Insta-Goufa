import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDriectoryItem({category}){
    return (
        <Card >
            <CardImg width="100%" src={category.image} alt={category.name} />
            <CardImgOverlay>
                <CardTitle>{category.name}</CardTitle>
            </CardImgOverlay>
            <CardBody>
                <CardTitle>{category.name}</CardTitle>
                <CardText>{category.description}</CardText>
            </CardBody>
        </Card>
    )
}

function Directory(props) {
    const directory = props.categories.map(category => {
        return (
            <div key={category.id} className="col-md-4 m-0">
                <RenderDriectoryItem category={category} />
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

export default Directory;