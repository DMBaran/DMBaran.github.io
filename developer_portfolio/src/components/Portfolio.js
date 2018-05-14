import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

export default class Portfolio extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col mdOffset={2} md={4} sm={12} className='aboutMe'>
                        <h1>Portfolio</h1>
                        <hr />
                        <Row>
                            <Col md={12} sm={6} xs={12}>
                                <div className='gallery'>
                                    <Image src='images/Psychic.jpg' width='100%' height='240px' />
                                    <h2 className='galleryText'>Psychic</h2>
                                </div>
                            </Col>
                            <Col md={12} sm={6} xs={12}>
                                <div className='gallery'>
                                    <Image src='images/informationStation.jpeg' width='100%' height='240px' />
                                    <h2 className='galleryText'>Information Station</h2>
                                </div>
                            </Col>
                            <Col md={12} sm={6} xs={12}>
                                <div className='gallery'>
                                    <Image src='images/Giftastic.jpeg' width='100%' height='240px' />
                                    <h2 className='galleryText'>Giftastic</h2>
                                </div>
                            </Col>
                            <Col md={12} sm={6} xs={12}>
                                <div className='gallery'>
                                    <Image src='images/unit-4-game.jpg' width='100%' height='240px' />
                                    <h2 className='galleryText'>RPG</h2>
                                </div>
                            </Col>
                            <Col md={12} sm={6} xs={12}>
                                <div className='gallery'>
                                    <Image src='images/TriviaGame.png' width='100%' height='240px' />
                                    <h2 className='galleryText'>Trivia</h2>
                                </div>
                            </Col>
                            <Col md={12} sm={6} xs={12}>
                                <div className='gallery'>
                                    <Image src='images/music.jpeg' width='100%' height='240px' />
                                    <h2 className='galleryText'>Artists</h2>
                                </div>
                            </Col>
                        </Row>
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