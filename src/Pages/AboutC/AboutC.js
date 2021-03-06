import React, { Component } from 'react';
import './AboutC.css';
import { Grid, Row, Col } from 'react-bootstrap';
import img2 from '../../graphics/3.png';


export default class AboutC extends Component {
    render() {
        return (
            <div id='about'>
                <Grid fluid>
                    <Row id='r2' className='show-grid'>
                        <Col id='hackiv-desc' md={6} lg={6}>
                            <h4>EVENTO</h4>
                            <p>Evento is a software-based end to end solution to facilitate all activities in any kind of event or happenings which might necessitate the tracking of resources involved.
                        </p>
                        </Col>
                        <Col md={6} mdHidden xsHidden smHidden lg={6}>
                            <img id='aboutc-img' alt='hackiv' src={img2}></img>
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}