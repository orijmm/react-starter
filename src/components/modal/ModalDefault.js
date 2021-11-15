
import React, { useState } from 'react'; import Modal from 'react-bootstrap/Modal';
import '@sass-components/modalTr.scss'

const ModalDefault = ({ data, setshow }) => {

  //const [show, setshow] = useState(false); Se manda desde el padre

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header style={{ "margin": "0px 5%", "paddingLeft": "0" }}>
        <h5 className="title_modal">Editar porcentaje de beneficiarios</h5>
      </Modal.Header>
      <Modal.Body>
        {data}
      </Modal.Body>
      <Modal.Footer style={{ "background-color": "#fafbfc" }}>
        <a className="button_exit mr-3" onClick={handleClose}>
          Cerrar
        </a>
        <Button className="button_save mr-3" onClick={handleClose}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );


};


export default ModalDefault;
