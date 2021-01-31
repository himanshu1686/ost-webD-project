import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const EmailSend = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div style={{ padding: '5%' }}>
          <input
            style={{
              paddingLeft: '5%',
              paddingRight: '5%',
              borderRadius: '5px'
            }}
            placeholder='Name'
          ></input>
        </div>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onSubmit={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};