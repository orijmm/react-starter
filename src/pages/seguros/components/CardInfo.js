import React from 'react'
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import '@sass-components/generales/cardInfo.scss';

const CardInfo = ({ Title, Subtitle, Parag, Parag2, Parag3, icon = null }) => {
    return (
        <>
            <Card className="cardInfo mb-2">
                <Card.Body className="pt-2">
                    <Card.Title className="text-left"><span className={"icon-x3 " + icon} ></span></Card.Title>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text as="div" className="mb-2">
                        <Row>
                            <Col md={8}>
                                {Parag}
                                <br></br>
                                {Parag2}
                                <br></br>
                                {Parag3}
                            </Col>
                            <Col md={2} className='text-center'>
                                <div className={"icon-x3 icon-itaufonts_full_pdf"} ></div>
                                <div className='card-text-pdf'>Póliza</div>
                            </Col>
                            <Col md={2} className='text-center'>
                                <div className={"icon-x3 icon-itaufonts_full_pdf"} ></div>
                                <div className='card-text-pdf'>Certificado</div>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardInfo