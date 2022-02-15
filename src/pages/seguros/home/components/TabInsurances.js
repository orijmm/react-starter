import { Container, Tab, Tabs } from "react-bootstrap";
import ListInsurances from "./ListInsurances";

const TabInsurances = () => {
    //consulta base de datos de los seguros (array de objetos)
    const insurancesList = {
        "auto": {
            list_insurances: [
                {
                    rut: "16.789.913-7",
                    prima_bruta: "3,26",
                    prima_neta: "",
                    company: "Zenit Seguros Generales",
                    fecha_contratacion: "09/02/2022",
                    fecha_vigencia: "25/01/2022",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "CC",
                    patente: "ASD3456",
                    url_comporbante: "https://itau-desarrollo.alwayson.cl/storage/pdf/7743_16.789.913-7_nuevo_automotriz.pdf",
                    url_poliza: "",
                    num_poliza: "sdfdsf43536",
                    materia_asegurada: "subaru outback 2019"
                },
                {
                    rut: "10.910.108-7",
                    prima_bruta: "3,26",
                    prima_neta: "",
                    company: "Mapfre Cia de Seg Grales",
                    fecha_contratacion: "06/01/2022",
                    fecha_vigencia: "25/01/2022",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "TDC",
                    patente: "",
                    url_comporbante: "https://itau-desarrollo.alwayson.cl/storage/pdf/7743_16.789.913-7_nuevo_automotriz.pdf",
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
                    prima_bruta: "0,17",
                    prima_neta: "",
                    company: "sura",
                    fecha_contratacion: "03/02/2022",
                    fecha_vigencia: "03/02/2023",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "TDC",
                    url_comporbante: "",
                    url_poliza: "",
                    num_poliza: "6691557",
                    materia_asegurada: "Vida Clásico"
                },
                {
                    rut: "16.789.913-7",
                    prima_bruta: "0,17",
                    prima_neta: "",
                    company: "liberty",
                    fecha_contratacion: "01/02/2022",
                    fecha_vigencia: "01/02/2023",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "TDC",
                    url_comporbante: "",
                    url_poliza: "",
                    num_poliza: "6691555",
                    materia_asegurada: "Vida Clásico",
                }
            ]
        },
        "proteccion": {
            list_insurances: [
                {
                    rut: "16.789.913-7",
                    prima_bruta: "0,176",
                    prima_neta: "",
                    company: "SEGUROS GENERALES SURAMERICANA S.A",
                    fecha_contratacion: "30/03/2021",
                    fecha_vigencia: "31/12/2022",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "TDC",
                    url_comporbante: "",
                    url_poliza: "",
                    num_poliza: "6691593",
                    materia_asegurada: "PROTECCION TRADICIONAL UF1000 INTERNET",
                }
            ]
        },
        "hogar": {
            list_insurances: [
                {
                    rut: "16.789.913-7",
                    prima_bruta: "0,53",
                    prima_neta: "",
                    company: "sura",
                    fecha_contratacion: "25/01/2022",
                    fecha_vigencia: "25/01/2022",
                    fecha_renovacion: "25/01/2022",
                    bonificacion: false,
                    medio_pago: "TDC",
                    url_comporbante: "https://itau-desarrollo.alwayson.cl/storage/pdf/16.789.913-7_7880_hogar_con_bonificacion_60.pdf",
                    url_poliza: "",
                    num_poliza: "6erty93",
                    materia_asegurada: "Hogar Con Bonificacion 60%"
                }
            ]
        },
        "otros": {
            list_insurances: []
        }
    };
    return (
        <>
            <Container id="main" fluid="fluid">

                <Tabs defaultActiveKey="auto" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="auto" title="AUTO">
                        <ListInsurances list={insurancesList.auto.list_insurances} icon="icon-itaufonts_full_seguro_auto" />
                    </Tab>
                    <Tab eventKey="vida" title="VIDA">
                        <ListInsurances list={insurancesList.vida.list_insurances} icon="icon-itaufonts_seguro_vida" />
                    </Tab>
                    <Tab eventKey="proteccion" title="PROTECCIÓN">
                        <ListInsurances list={insurancesList.proteccion.list_insurances} icon="icon-itaufonts_seguro_de_credito" />
                    </Tab>
                    <Tab eventKey="hogar" title="HOGAR">
                        <ListInsurances list={insurancesList.hogar.list_insurances} icon="icon-itaufonts_seguro_residencia" />
                    </Tab>
                    <Tab eventKey="otros" title="OTROS">
                        <ListInsurances list={insurancesList.otros.list_insurances} icon="icon-itaufonts_seguro_vida" />
                    </Tab>
                </Tabs>
            </Container>
        </>
    );
}

export default TabInsurances;