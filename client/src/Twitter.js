import React, { Fragment } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export const Twitter = () => {
  return (
    <Fragment>
      <div className='col-md-12 col-xs-12'>
        <h2
          className='page-title'
          style={{
            fontSize: '1.8rem',
            marginTop: '20px',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          COVID-19 Verified Tweets
        </h2>
      </div>

      <div className='col-md-6 col-xs-12'>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='WHO'
          options={{ height: 600 }}
        />
      </div>
      <div className='col-md-6 col-xs-12'>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='MoHFW_INDIA'
          options={{ height: 600 }}
        />
      </div>
    </Fragment>
  );
};
