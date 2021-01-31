import React, { Fragment, useEffect, useState } from 'react';
import { Message } from './Message';
import axios from 'axios';
import { EmailSend } from './EmailSend';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

export const DiscussionForum = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const onOpenModal = () => {
    setOpen(true);
  };
  const changeName = e => {
    e.preventDefault();
    setName(e.target.value);
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
  };

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  const fetchMessages = async () => {
    const res = await axios.post('http://localhost:5000/bizmap/get_messages');
    // console.log(res.data.messages);
    setMessages(res.data.messages);
  };

  //

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [incomplete, setIncomplete] = useState(false);
  const postMessage = async () => {
    if (message.split(' ').join('') == '') {
      // setIncomplete(true);
      // setTimeout(() => {
      //   setIncomplete(false);
      // }, 5000);
    } else {
      const res = await axios.post('http://localhost:5000/bizmap/add_message', {
        name: user.name,
        content: message,
        image: user.image
      });
      window.location.reload(false);
    }
  };
  const onSubmit = e => {
    // console.log('submit');
    postMessage();
  };

  const onClick = async e => {
    e.preventDefault();
    if (user) {
      postMessage();
    } else {
      handleShow();
    }
    // e.preventDefault();
    // const res = await axios.post(
    //   'https://project-aashray.herokuapp.com/bizmap/add_message',
    //   {
    //     content: message
    //   }
    // );
    // // // console.log(res.data);
    // window.location.reload(false);
  };
  const onChange = e => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const componentClicked = () => {
    // console.log('logging in');
  };

  const responseFacebook = response => {
    // console.log(response);
  };
  const saveUser = async (obj) => {
    const res = await axios.post('http://localhost:5000/bizmap/create_user', {
      name: obj.name,
      username: obj.email.split('@')[0],
      image: obj.imageUrl
    });
    // console.log(res.data);
     setUser({
      name: obj.name,
      username: obj.email.split('@')[0],
      image: obj.imageUrl
    });
  };
  const responseGoogle = response => {
    const obj = response.profileObj;
    // // console.log(obj)
    saveUser(obj);
   
  };
  useEffect(() => {
    handleClose();
  }, [user]);

  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <Fragment>
      <div className='col-lg-8 col-xl-6'>
        <div className='card' style={{ borderRadius: '10px' }}>
          <div className='card-body'>
            <h4
              className='page-title'
              style={{
                fontSize: '1.8rem',
                marginTop: '20px',
                textAlign: 'center'
              }}
            >
              Discussion Forum
            </h4>
            <div
              className='chat-box scrollable position-relative ps-container ps-theme-default ps-active-y'
              style={{ height: '475px' }}
              data-ps-id='1eff0be2-6d10-f91a-6f39-efe77a9cfa1a'
            >
              {/*chat Row */}
              <ul className='chat-list'>
                {/*chat Row */}
                {messages.length > 0 &&
                  messages.map(content => {
                    return <Message content={content}></Message>;
                  })}

                {/*chat Row */}

                {/*chat Row */}
                {/* <div id="someDiv"></div> */}
              </ul>
              <div
                className='ps-scrollbar-x-rail'
                style={{ left: '0px', bottom: '0px' }}
              >
                <div
                  className='ps-scrollbar-x'
                  tabIndex={0}
                  style={{ left: '0px', width: '0px' }}
                />
              </div>
              <div
                className='ps-scrollbar-y-rail'
                style={{ top: '0px', right: '3px', height: '475px' }}
              >
                <div
                  className='ps-scrollbar-y'
                  tabIndex={0}
                  style={{ top: '0px', height: '427px' }}
                />
              </div>
            </div>
          </div>
          <div className='card-body border-top'>
            <div className='row'>
              <div className='col-9'>
                <div className='input-field mt-0 mb-0'>
                  <input
                    type='text'
                    value={message}
                    onChange={onChange}
                    id='textarea1'
                    placeholder='Type and enter'
                    className='form-control border-0'
                  />
                </div>
              </div>
              <div className='col-3'>
                <a
                  className='btn-circle btn-lg btn-cyan float-right text-white'
                  href='javascript:void(0)'
                  onClick={onClick}
                >
                  <i className='fas fa-paper-plane' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <EmailSend></EmailSend> */}
      <Fragment>
        {/* <Button variant='primary' onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='Boton'>Sign In To Continue</Modal.Title>
          </Modal.Header>
          {/* {incomplete && (
            <Alert variant='danger'>
              Please, fill all the fields in the form
            </Alert>
          )} */}
          <div style={{ padding: '5%', textAlign: 'center' }}>
            <GoogleLogin
              clientId='389790068785-osb9rej502bbdbt6kil1jjrvo825o6fr.apps.googleusercontent.com'
              buttonText='Sign In with Google'
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            {/* <div style={{ width: '2%' }}></div>
            <br />
            <FacebookLogin
              textButton='Facebook'
              appId='505495360359430'
              size='small'
              autoLoad={false}
              fields='name,email,picture'
              onClick={componentClicked}
              callback={responseFacebook}
              icon='fa fa-facebook'
            /> */}
          </div>
          <Modal.Footer style={{ padding: '5% 0 7% 0' }}>
            <Button variant='secondary' className='Boton' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    </Fragment>
  );
};
