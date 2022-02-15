import { Card, Col, Row } from "react-bootstrap";
import CardInfo from "../../components/CardInfo";

const ListInusrances = ({ list, icon }) => {
    //revisar que tarjetas o card se van a usar
    return (
        <>
            {
                list.length > 0 ?
                    list.map((item, i) => {
                        console.log(item.materia_asegurada);
                        return (
                            <div key={`div-${i}`}>
                                    <Row key={`row-${i}`}>
                                        <Col key={`col-${i}`}>
                                            <CardInfo key={`CardInfo-${i}`}
                                                Title={item.materia_asegurada}
                                                Parag={`N° de póliza: ${item.num_poliza}`}
                                                Parag2={`Vigencia: ${item.fecha_contratacion} - ${item.fecha_vigencia}`}
                                                Parag3={`Materia Asegurada: ${item.materia_asegurada}`}
                                                icon={icon}
                                            />
                                        </Col>
                                    </Row>
                            </div>
                        );
                    })
                    :
                    <p>No tiene seguros contratados en esta categoría, contrate acá</p>
            }
        </>
    );
}

export default ListInusrances;