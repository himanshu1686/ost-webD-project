import React, { Fragment } from 'react';

export const Message = content => {
  // // console.log(content);
  return (
    <Fragment>
      <li className='chat-item'>
        <div className='chat-img'>
          {content.content.image && (
            <img src={content.content.image} alt='user' />
          )}
        </div>
        <div className='chat-content'>
          {content.content.name && (
            <h6 className='font-medium'>{content.content.name}</h6>
          )}
          <div className='box bg-light-info'>{content.content.content}</div>
        </div>
        {/* <div className='chat-time'>{content.content.Date.split(' G')[0]}</div> */}
      </li>
    </Fragment>
  );
};
