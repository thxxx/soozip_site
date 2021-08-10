import { Modal, Container, Col, Row, Button } from 'react-bootstrap'

export default function ModalGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.item.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                  {props.item.author}
              </Col>
              <Col xs={6} md={4}>
                  {props.item.description}
              </Col>
            </Row>
  
            <Row>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                  {props.item.img}
              </Col>
              <Col xs={6} md={4}>
                  {props.item.like}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>닫기</Button>
        </Modal.Footer>
      </Modal>
    );
  }