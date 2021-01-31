import React, { Fragment } from 'react';

export const Footer = () => {
  return (
    <Fragment>
      <footer
        className='footer text-center wow fadeInUp'
        style={{ background: 'white' }}
      >
        <span style={{ fontSize: '130%' }} className='wow fadeInUp'>
          Visit at:
          <a href='https://www.enactusnsut.org/' style={{ color: '#46b7f5' }}>
            {' '}
            www.enactusnsut.org
          </a>
        </span>
        <div
          className='row'
          style={{
            margin: '0.5rem 0',
            justifyContent: 'center',
            marginTop: '20px'
          }}
        >
          {/* <div className='col-1' style={{ margin: '2px' }}> */}
          <a href='mailto:enactusnsit@gmail.com'>
            <i
              className='fab fa-google-plus fa-2x'
              style={{ color: '#db4a39', margin: '2px' }}
            ></i>
          </a>
          {/* </div> */}
          {/* <div className='col-1' style={{ margin: '2px' }}> */}
          <a href='https://www.facebook.com/EnactusNSUT'>
            <i
              className='fab fa-facebook fa-2x'
              style={{ color: '#1E4D9D', margin: '2px' }}
            ></i>
          </a>
          {/* </div> */}
          {/* <div className='col-1' style={{ margin: '2px' }}> */}
          <a href='https://www.instagram.com/enactusnsut'>
            <i
              className='fab fa-instagram fa-2x nikhil'
              style={{ margin: '2px' }}
            ></i>
          </a>
          {/* </div> */}
          {/* <div className='col-1' style={{ margin: '2px' }}> */}
          <a href='https://www.linkedin.com/company/enactus-nsut'>
            <i
              className='fab fa-linkedin fa-2x'
              style={{ color: '#0073B0', margin: '2px' }}
            ></i>
          </a>
          {/* </div> */}
        </div>
        <br />
        <span className='' style={{ fontSize: '120%' }}>
          Made with <i class='fas fa-heart' style={{ color: 'red' }}></i> by{' '}
          <img
            src='enactus.png'
            style={{ height: '30px', marginBottom: '10px' }}
          ></img>
        </span>
        <br></br>
      </footer>
    </Fragment>
  );
};
