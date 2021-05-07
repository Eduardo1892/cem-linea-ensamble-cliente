import { useState } from "react"
import { Button, Col, Row, Form } from "react-bootstrap"


function Test() {

    const [counter, setCounter] = useState(0)

    return (
      <>
        <h1>Ejecutivo Usuario Demo</h1>
        <Row>
          
            {counter === 0 
            ?
            <Col>
              <Button
                variant="primary"
                onClick={() => setCounter(counter + 1)}
              >
                Iniciar Nueva Carpeta
              </Button>
              </Col>
            :
            <>
            <Col>
              <h4>Numero Carpeta: {counter}</h4>
            </Col>
            <Col>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Control as="select">
                <option>DECLARACION JURADA DE ESTADO CIVIL</option>
                <option>MANDATO PAGO AUTOMÁTICO CON CUENTAS (P.A.C.) EN OTRO BANCO</option>
                <option>SOLICITUD DE INCORPORACIÓN Y CERTIFICADO DE COBERTURA SEGURO DESGRAVAMEN LÍNEA DE CRÉDITO BANCA EMPRESAS</option>
                <option>FICHA EXPLICATIVA PARA AVALISTA Y/O FIADOR Y CODEUDOR SOLIDARIO PERSONA NATURAL
</option>
                <option>ANEXO APROBACION DE PRODUCTOS Y/O SERVICIOS PARA PERSONAS JURIDICAS
 </option>
              </Form.Control>
            </Form.Group>
            </Col>
            <Col className="d-flex justify-content-end mr-1">
              <Button
                variant="primary"
                size={"lg"}
              >
                Imprimir Documento
              </Button> 
            </Col>
              </>
          }
           
          
          
        </Row>
        

        {counter > 0 &&
          <embed 
              src={"http://localhost:3000/static/CLI-002.pdf#toolbar=1&navpanes=0&scrollbar=0"}
              width="100%" 
              height="600px" 
              type="application/pdf"
          />
        } 
      </>
    )
}

export default Test