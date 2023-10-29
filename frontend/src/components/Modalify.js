
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const  Modalify = (props) => {
 


  return (
    <>
     

      <Modal size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      {...props}
      centered>
        <Modal.Header>
          <Modal.Title>AMOUNT IN DOLLARS</Modal.Title>
        </Modal.Header>
        <Modal.Body className='amount'>${props.amount}</Modal.Body>
        <Modal.Footer>
          <Button  onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalify;