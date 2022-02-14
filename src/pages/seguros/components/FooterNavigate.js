import React from "react";
import { Col, Button, Row } from "react-bootstrap";

/* Styles */
import '@sass-components/generales/footer_navigate.scss';
import { useDispatch } from "react-redux";
import { setPage } from "../../../actions";

const FooterNavigate = ({ backPage, nextPage, data = [], btnValid, setshowErrors }) => {
  const dispatch = useDispatch();

  const handleChangeToBack = () => {
    dispatch(setPage("PRELOADER"));
    setTimeout(() => {
      dispatch(setPage(backPage));
    }, 3000);
  };

  const handleNextPage = () => {
    switch (nextPage) {
      case "DECLARACION":
        if (!btnValid) {
          dispatch(setPage("PRELOADER"));
          setTimeout(() => {
            dispatch(setPage(nextPage));
          }, 3000);
        } else {
          setshowErrors(true);
        }
        break;
    }
  }

  return (
    <Row>
      <Col className="page_footer_navigate">
        <Button
          className={btnValid === true ? 'button_footer_disable float-right' : 'btn float-right'}
          onClick={() => handleNextPage()}
          variant="outline-primary"
        >
          Siguiente Paso
        </Button>
        <Button
          className="button_footer float-right"
          onClick={() => handleChangeToBack()}
        >Volver</Button>
      </Col>
    </Row>
  );
};
export default FooterNavigate;
