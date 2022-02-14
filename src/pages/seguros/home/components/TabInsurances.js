import { Tab, Tabs } from "react-bootstrap";
import ListInsurances from "./ListInsurances";

const TabInsurances = () => {
    //consulta base de datos de los seguros (array de objetos)
    const insurancesList = {
        "auto": {
            list_insurances: [
                {
                    rut: "16.789.913-7",
                    prima_bruta: "1000",
                    prima_neta: "",
                    company: "sura",
                    fecha_contratacion: "25/01/2022",
                    fecha_vigencia: "25/01/2022",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "CC",
                    url_comporbante: "",
                    url_poliza: "",
                    num_poliza: "sdfdsf43536",
                    materia_asegurada: "subaru 2019"
                },
                {
                    rut: "10.910.108-7",
                    prima_bruta: "2000",
                    prima_neta: "",
                    company: "liberty",
                    fecha_contratacion: "25/01/2022",
                    fecha_vigencia: "25/01/2022",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "TDC",
                    url_comporbante: "",
                    url_poliza: "",
                    num_poliza: "WERY-345435",
                    materia_asegurada: "chevrolet 2020",
                }
            ]
        },
        "vida": {
            list_insurances: [
                {
                    rut: "16.789.913-7",
                    prima_bruta: "2500",
                    prima_neta: "",
                    company: "sura",
                    fecha_contratacion: "25/01/2022",
                    fecha_vigencia: "25/01/2022",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "TDC",
                    url_comporbante: "",
                    url_poliza: "",
                    num_poliza: "",
                    materia_asegurada: "Vida Clasico"
                },
                {
                    rut: "16.789.913-7",
                    prima_bruta: "10000",
                    prima_neta: "",
                    company: "liberty",
                    fecha_contratacion: "25/01/2022",
                    fecha_vigencia: "25/01/2022",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "TDC",
                    url_comporbante: "",
                    url_poliza: "",
                    num_poliza: "",
                    materia_asegurada: "Vida Clasico",
                }
            ]
        },
        "proteccion": {
            list_insurances: []
        },
        "hogar": {
            list_insurances: [
                {
                    rut: "16.789.913-7",
                    prima_bruta: "2500",
                    prima_neta: "",
                    company: "sura",
                    fecha_contratacion: "25/01/2022",
                    fecha_vigencia: "25/01/2022",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "TDC",
                    url_comporbante: "",
                    url_poliza: "",
                    num_poliza: "",
                    materia_asegurada: "Hogar Bonificación"
                }
            ]
        },
        "otros": {
            list_insurances: [
                {
                    rut: "16.789.913-7",
                    prima_bruta: "2500",
                    prima_neta: "",
                    company: "sura",
                    fecha_contratacion: "25/01/2022",
                    fecha_vigencia: "25/01/2022",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "TDC",
                    url_comporbante: "",
                    url_poliza: "",
                    num_poliza: "",
                    materia_asegurada: "Full Salud"
                }
            ]
        }
    };
    return (
        <>
            <Tabs defaultActiveKey="auto" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="auto" title="AUTO">
                    <ListInsurances list={insurancesList.auto.list_insurances} />
                </Tab>
                <Tab eventKey="vida" title="VIDA">
                    <ListInsurances list={insurancesList.vida.list_insurances} />
                </Tab>
                <Tab eventKey="proteccion" title="PROTECCIÓN">
                    <ListInsurances list={insurancesList.proteccion.list_insurances} />
                </Tab>
                <Tab eventKey="hogar" title="HOGAR">
                    <ListInsurances list={insurancesList.hogar.list_insurances} />
                </Tab>
                <Tab eventKey="otros" title="OTROS">
                    <ListInsurances list={insurancesList.otros.list_insurances} />
                </Tab>
            </Tabs>
        </>
    );
}

export default TabInsurances;