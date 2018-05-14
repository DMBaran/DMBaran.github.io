import React, { Component } from 'react';
import { Grid, Col, Row, Image, Button } from 'react-bootstrap';

export default class Contact extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col mdOffset={2} md={4} sm={12} className='aboutMe'>
                        <h1>Contact</h1>
                        <hr />
                        <h2 className="title" id="name">Name</h2>
                        <div className="input-group1">
                            <input type="text" className="form-control" placeholder="Your Name" aria-describedby="basic-addon1" />
                        </div>
                        <h2 className="title">Email</h2>
                        <div className="input-group2">
                            <input type="text" className="form-control" placeholder="Email Address" aria-describedby="basic-addon1"/>
                        </div>
                        <h2 className="title">Message</h2>
                        <textarea className="form-control" rows="8"></textarea>
                        <Button id='submitButton' bsStyle="success">Submit</Button> 
                    </Col>
                    <Col mdOffset={1} md={3} sm={12} className='connectWithMe'>
                        <h2>Connect with Me</h2>
                        <hr />
                        <Row>
                            <Col xs={4} sm={4}>
                                <Image src='images/github.png' responsive />
                            </Col>
                            <Col xs={4} sm={4}>
                                <Image src='images/linked-in.png' responsive />
                            </Col>
                            <Col xs={4} sm={4}>
                                <Image src='images/stackoverflow.png' responsive />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}