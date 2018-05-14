import React, { Component } from 'react';
import{Grid, Col, Row, Image} from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col mdOffset={2} md={4} sm={12} className='aboutMe'>
                        <h1>About Me</h1>
                        <Image src='images/Family.jpg' responsive />
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper massa faucibus, egestas felis ut, dignissim enim. Morbi facilisis magna mauris, eu auctor dolor sagittis id. Donec ac augue ut est maximus aliquet. Nullam elementum commodo feugiat. Aliquam sem quam, rutrum ac rhoncus non, euismod et ligula. Curabitur bibendum velit ut ipsum euismod auctor. Praesent et aliquet lectus. Vivamus tincidunt, elit interdum sollicitudin porttitor, velit risus vestibulum metus, faucibus semper ante ipsum eu augue.Mauris at sodales lorem. Praesent id eros massa. Sed luctus nisl dolor, non tristique augue auctor quis. Nulla tristique ut tortor pharetra tincidunt.
                        </p>
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