import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
export class Dishdetail extends Component {
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle tag="h4">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }
    renderComments(dish) {
        if (dish != null)
            return (
                <div>
                    <h4>Comments</h4>
                    {
                        dish.comments.map(commit => {
                            return (
                                <div key={commit.id}>
                                    <ul class="list-unstyled">
                                        <li>{commit.comment}</li>
                                    </ul>
                                    <ul class="list-unstyled">
                                        <li>--{commit.author} ,&nbsp;
                                         {new Intl.DateTimeFormat('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: '2-digit'
                                        }).format(new Date(commit.date))}
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            );
        else
            return (
                <div></div >
            );

    }

    render() {

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}

                </div>
            </div>
        );
    }
}

export default Dishdetail;
