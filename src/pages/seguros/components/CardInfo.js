import React from 'react'
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import '@sass-components/generales/cardInfo.scss';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../actions';

const CardInfo = ({ Title, Subtitle, Parag, Parag2, Parag3, icon = null }) => {
    const dispatch = useDispatch();

    const detailsPage = (idInsurance) => {
        dispatch(setPage("PRELOADER"));
        setTimeout(() => {
            dispatch(setPage("DETAILS_INSURANCE"));
        }, 3000);
    }

    return (
        <>
            <Card className="cardInfo mb-2">
                <Card.Body className="pt-2">
                    <Card.Title className="text-left"><span className={"icon-x3 " + icon} ></span></Card.Title>
                    <Card.Text as="div" className="mb-2 ml-3">
                        <Row>
                            <Col className='card-content-bordered' md={6}>
                                <div className='card-h4 mb-0'>{Title}</div>
                                <Row>
                                    <Col>
                                        <br></br>
                                        {Parag}
                                        <br></br>
                                        {Parag2}
                                        <br></br>
                                        {Parag3}
                                        <br></br>
                                    </Col>
                                    <Col className='text-right'>
                                        <div onClick={() => detailsPage('1243')} className={"icon-x3 icon-itaufonts_busca_consulta card-change-page"} ></div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3} className='text-center'>
                                <div className={"icon-x3 icon-itaufonts_full_pdf"} ></div>
                                <Button
                                    className="btn"
                                    variant="outline-info"
                                >
                                    Póliza
                                </Button>
                            </Col>
                            <Col md={3} className='text-center'>
                                <div className={"icon-x3 icon-itaufonts_full_pdf"} ></div>
                                <Button
                                    className="btn"
                                    variant="outline-info"
                                >
                                    Certificado
                                </Button>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardInfo