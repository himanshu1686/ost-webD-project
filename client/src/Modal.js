import React, { Component } from 'react';
import UserForm from './form/UserForm';

export default class Modal extends Component {
  render() {
    return (
      <div
        className='modal fade'
        id='exampleModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Want to be featured on Covid19 Bizmap?
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <UserForm />
          </div>
        </div>
      </div>
    );
  }
}
