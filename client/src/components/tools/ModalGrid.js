import { Modal, Container, Col, Row, Button } from 'react-bootstrap'
import './Modal.scss'

export default function ModalGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.item.content_title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container className="container">
            <div className="image">
              <img src={props.item.content_image} alt="image"/>
            </div>
            <div className="writer">
              <p>
                작성자
              </p>
              <p>
                {props.item.writer}
              </p>
            </div>
            <hr />
            <div className="content_desc">
              <p>
                설명
              </p>
              <p>
                {props.item.content_desc}
              </p>
            </div>
            <div className="like">
              <p>
                좋아요 개수 : {props.item.like}
              </p>
              <Button style={{marginRight:"0px"}}>
                좋아요
              </Button>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>닫기</Button>
        </Modal.Footer>
      </Modal>
    );
  }