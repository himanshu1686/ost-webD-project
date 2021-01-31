import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';

export const ActiveCases = props => {
  const { cases, deaths, recovered, active } = props.data;
  return (
    <Fragment>
      <div className='col-lg-4 col-xl-6'>
        <div className='card card-hover' style={{ borderRadius: '10px' }}>
          <h4
            className='page-title'
            style={{
              fontSize: '1.8rem',
              marginTop: '20px',
              textAlign: 'center'
            }}
          >
            Total Cases
          </h4>
          <div
            className='card-body'
            style={{
              background:
                'url(../../assets/images/background/active-bg.png) no-repeat top center',
              paddingTop: '0px'
            }}
          >
            <div className='pt-3 text-center' style={{ paddingTop: '0px' }}>
              <span className='display-4 d-block font-medium' style={{}}>
                <strong>{cases}</strong>{' '}
              </span>
              <span>Cases</span>
              {/* Progress */}
              <div className='progress mt-5' style={{ height: '4px' }}>
                <div
                  className='progress-bar bg-info'
                  role='progressbar'
                  style={{
                    width: `${(recovered / (recovered + deaths + active)) *
                      100}%`
                  }}
                  aria-valuenow={15}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className='progress-bar bg-danger'
                  role='progressbar'
                  style={{
                    width: `${(active / (recovered + deaths + active)) * 100}%`
                  }}
                  aria-valuenow={30}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className='progress-bar bg-warning'
                  role='progressbar'
                  style={{
                    width: `${(deaths / (recovered + deaths + active)) * 100}%`
                  }}
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              {/* Progress */}
              {/* row */}
              <div className='row mt-4 mb-3'>
                {/* column */}
                <div className='col-4 border-right text-left'>
                  <h3 className='mb-0 font-medium'>{active}</h3>Active Cases
                </div>
                {/* column */}
                <div className='col-4 border-right'>
                  <h3 className='mb-0 font-medium'>{deaths}</h3>Deaths
                </div>
                {/* column */}
                <div className='col-4 text-right'>
                  <h3 className='mb-0 font-medium'>{recovered}</h3>Recovered
                </div>
              </div>
              <a
                href='https://www.mygov.in/covid-19'
                className='waves-effect waves-light mt-3 btn btn-lg  accent-4 mb-3'
                style={{ backgroundColor: '#46b7f5', color: 'white' }}
              >
                View More Details
              </a>
            </div>
          </div>
        </div>
        <div className='card  card-hover' style={{ borderRadius: '10px' }}>
          <div className='card-body' style={{ textAlign: 'center' }}>
            <a
              href='https://pmnrf.gov.in/en/'
              className='waves-effect waves-light mt-3 btn btn-lg accent-4 mb-3'
              // style={{ backgroundColor: '#D4EDDA' }}
              style={{ backgroundColor: '#46b7f5', color: 'white' }}
            >
              PM Relief Care Fund
            </a>{' '}
            <br />
            <br />
            <a
              href='https://www.mohfw.gov.in/'
              className='waves-effect waves-light mt-3 btn btn-lg accent-4 mb-3'
              // style={{ backgroundColor: '#F8D7DA' }}
              style={{ backgroundColor: '#46b7f5', color: 'white' }}
            >
              Helpline Support
            </a>{' '}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
