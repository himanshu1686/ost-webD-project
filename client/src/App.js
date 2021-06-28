import React, { Component } from 'react';
import Graph from './Graph';
import { ActiveCases } from './ActiveCases';
import { Twitter } from './Twitter';
import Categories from './Categories';
import axios from 'axios';
import { whitesmoke } from 'color-name';
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import Boostrapmodal from 'react-bootstrap/Modal';

const Category = [
  { category: 'All', id: 0, className: 'fa fa-cogs' },
  { category: 'Contact Tracing', id: 1, className: 'fa fa-phone' },
  { category: 'Fund donations', id: 2, className: 'fa fa-user' },
  { category: 'Donations', id: 3, className: 'fa fa-stethoscope' },
  { category: 'Mental Health', id: 4, className: 'fa fa-plus' },
  { category: 'Face shields', id: 5, className: 'fa fa-hospital' },
  { category: 'Diagnostics', id: 6, className: 'fa fa-certificate' },
  { category: 'Employee Support', id: 7, className: 'fa fa-users' },
  {
    category: 'Infection control',
    id: 8,
    className: 'fa fa-exclamation-triangle'
  },
  { category: 'Medication', id: 9, className: 'fa fa-plus' },
  { category: 'Patient Engagement', id: 10, className: 'fa fa-user' },
  { category: 'Informative portals', id: 11, className: 'fa fa-lock' },
  { category: 'PPE', id: 12, className: 'fa fa-medkit' },

  { category: 'Supports- Hackathon', id: 13, className: 'fa fa-cogs' },
  { category: 'Vaccinatory', id: 14, className: 'fa fa-user-md' },
  {
    category: 'Financial support providers',
    id: 15,
    className: 'fa fa-credit-card'
  },

  { category: 'Tele-Medicines', id: 16, className: 'fa fa-stethoscope' },
  { category: 'NGO Networking', id: 17, className: 'fa fa-database' },

  { category: 'Tele Education Resources', id: 18, className: 'fa fa-mobile' },
  {
    category: 'Covid Specialised Hospitals',
    id: 19,
    className: 'fa fa-hospital'
  },
  { category: 'Food Providers', id: 20, className: 'fa fa-bread-slice' },

  { category: 'Self Reporting Apps', id: 21, className: 'fa fa-cogs' },
  { category: 'datasets', id: 22, className: 'fa fa-database' },
  { category: 'Automobile', id: 23, className: 'fa fa-car' },
  { category: 'Skill Training', id: 24, className: 'fa fa-adjust' },
  { category: 'Mask Providers', id: 25, className: 'fa fa-thermometer' },
  { category: 'Heatmaps', id: 26, className: 'fa fa-street-view' },
  { category: 'Volunteering orgs', id: 27, className: 'fa fa-building' },
  // { category: 'Unemployed', id: 25, className: 'fa fa-male' },
  { category: 'Want to Volunteer', id: 28, className: 'fa fa-user' },
  { category: 'Bioinformatics', id: 29, className: 'fa fa-medkit' },
  {
    category: 'Alert/tracking app',
    id: 30,
    className: 'fa fa-exclamation-triangle'
  },
  {
    category: 'Helpdesk',
    id: 31,
    className: 'fa fa-medkit'
  },

  { category: 'Animal Care', id: 32, className: 'fa fa-search' },

  { category: 'Others', id: 33, className: 'fas fa-bars' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        { selected: 0, color: 'forestgreen' },
        { selected: 1, color: 'red' },
        { selected: 1, color: '#F8C146' },
        { selected: 1, color: 'blue' },
        { selected: 1, color: '#0B472B' },
        { selected: 1, color: 'forestgreen' },
        { selected: 0, color: 'red' },
        { selected: 0, color: '#F8C146' },
        { selected: 0, color: 'blue' },
        { selected: 0, color: '#0B472B' },
        { selected: 0, color: 'forestgreen' },
        { selected: 0, color: 'red' },
        { selected: 0, color: '#F8C146' },
        { selected: 0, color: 'blue' },
        { selected: 0, color: '#0B472B' },
        { selected: 0, color: 'forestgreen' },
        { selected: 0, color: 'red' },
        { selected: 0, color: '#F8C146' },
        { selected: 0, color: 'blue' },
        { selected: 0, color: '#0B472B' },
        { selected: 0, color: 'forestgreen' },
        { selected: 0, color: 'red' },
        { selected: 0, color: '#F8C146' },
        { selected: 0, color: 'blue' },
        { selected: 0, color: '#0B472B' },
        { selected: 0, color: 'forestgreen' },
        { selected: 0, color: 'red' },
        { selected: 0, color: '#F8C146' },
        { selected: 0, color: 'blue' },
        { selected: 0, color: '#0B472B' },
        { selected: 0, color: 'forestgreen' },
        { selected: 0, color: 'red' },
        { selected: 0, color: '#F8C146' },
        { selected: 0, color: 'blue' },
        { selected: 0, color: '#0B472B' },
        { selected: 0, color: 'forestgreen' }
      ],
      data: {
        active: 0,
        cases: 0,
        critical: 0,
        deaths: 0,
        recovered: 0,
        todayDeaths: 0
      },
      show: false
    };
  }

  componentDidMount() {
    axios.get('https://corona.lmao.ninja/v2/countries/India').then(response => {
      this.setState({
        data: {
          ...this.state.data,
          active: response.data.active,
          cases: response.data.cases,
          critical: response.data.critical,
          deaths: response.data.deaths,
          recovered: response.data.recovered,
          todayDeaths: response.data.todayDeaths
        }
      });
    });
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  toggle = (e, index) => {
    var value = 1;
    var array = this.state.category;
    if (index == 0) {
      if (array[0].selected == 0) {
        for (var i = 0; i < array.length; i++) {
          array[i].selected = 1;
        }
      } else {
        for (var i = 0; i < array.length; i++) {
          array[i].selected = 0;
        }
      }
    } else {
      for (var i = 0; i < this.state.category.length; i++) {
        value = value * this.state.category[i].selected;
      }
      if (value === 1) {
        for (var i = 0; i < this.state.category.length; i++) {
          array[i].selected = 0;
        }
        array[index].selected = 1;
      } else {
        if (this.state.category[index].selected === 1) {
          array[index].selected = 0;
        } else {
          array[index].selected = 1;
        }
      }
    }
    this.setState({ category: array });
  };
  render() {
    $('.page-wrapper').click(e => {
      if (e.target.id != 'main-wrapper') {
        console.log(e.target.className);
        var c = document.getElementById('main-wrapper').className;
        console.log(c);
        if (c == 'mini-sidebar show-sidebar') {
          document.getElementById('main-wrapper').className = 'mini-sidebar';
        }
      }
    });
    $('.left-sidebar').click(e => {
      document.getElementById('main-wrapper').className = 'mini-sidebar';
    });
    return (
      <div className='App' id='home'>
        <div
          id='main-wrapper'
          data-theme='light'
          data-layout='vertical'
          data-navbarbg='skin1'
          data-sidebartype='full'
          data-sidebar-position='fixed'
          data-header-position='fixed'
          data-boxed-layout='full'
        >
         
          <header className='topbar' data-navbarbg='skin1'>
            <nav
              className='navbar top-navbar navbar-expand-md navbar-dark'
              style={{ backgroundColor: '#46b7f5' }}
            >
              <div
                className='navbar-header'
                data-logobg='skin6'
                style={{ backgroundColor: '#46b7f5' }}
              >
                <a
                  className='nav-toggler waves-effect waves-light d-block d-md-none'
                  href='javascript:void(0)'
                >
                  <i className='fas fa-bars' style={{ color: 'white' }} />
                </a>
                <a className='navbar-brand' href='#home'>
                  {/* Logo icon */}
                  <b className='logo-icon'>
                    
                    <img
                      style={{ height: '20px' }}
                      src='newlogo2.png'
                      alt='homepage'
                      className='dark-logo'
                    />

                    <img
                      style={{ height: '20px' }}
                      src='newlogo.png'
                      alt='homepage'
                      className='light-logo'
                    />
                  </b>
                
                  <span className='logo-text'>
                    
                    SHIELD
                  </span>
                </a>
                <a
                  className='topbartoggler d-block d-md-none waves-effect waves-light'
                  href='javascript:void(0)'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <i className='fa fa-plus' style={{ color: 'white' }} />
                </a>
              </div>
       
              <div
                className='navbar-collapse collapse'
                id='navbarSupportedContent'
                data-navbarbg='skin1'
                style={{ backgroundColor: '#46b7f5' }}
              >
                
                <ul className='navbar-nav float-left mr-auto'>
                  <li className='nav-item d-none d-md-block'>
                    <a
                      className='nav-link sidebartoggler waves-effect waves-light'
                      href='javascript:void(0)'
                      data-sidebartype='mini-sidebar'
                    >
                      <i className='fas fa-bars' style={{ color: 'white' }} />
                    </a>
                  </li>
           
                  <li className='nav-item search-box'>
                    {' '}
                    <a
                      className='nav-link waves-effect waves-light'
                      href='javascript:void(0)'
                      data-toggle='modal'
                      data-target='#exampleModal'
                    >
                      We Hope you had fun visiting our site .
                    </a>
                   
                  </li>
                  
                </ul>
                
                <ul className='navbar-nav float-right'></ul>
              </div>
            </nav>
          </header>
          
          <aside className='left-sidebar' data-sidebarbg='skin6'>
            {/* Sidebar scroll*/}
            <div
              className='scroll-sidebar ps-container ps-theme-default ps-active-y'
              data-ps-id='bd2f6030-9e7b-5919-7bb1-cbc041d97ecb'
            >
              {/* Sidebar navigation*/}
              <nav className='sidebar-nav'>
                <ul aria-expanded='false' className='collapse first-level in'>
                  {
                  Category.map((category, index) => {
                    if(index<=6 && index!=0){
                    return (
                      <Categories
                        Category={category.category}
                        key={index}
                        index={category.id}
                        change={this.toggle}
                        icons={category.className}
                        category={this.state.category}
                      ></Categories>
                    );
                  }
                  })}
                </ul>
              </nav>
            </div>
          </aside>
          <div className='page-wrapper' style={{ display: 'block' }}>
            <div className='page-breadcrumb'>
              <div className='row'>
                <div
                  className='col-12 align-self-center'
                  style={{ textAlign: 'center' }}
                >
                  <h4
                    className='page-title wow fadeInUp'
                    style={{ fontSize: '2.2rem' }}
                  >
                    Covid19 MAP
                  </h4>
                  <div className='d-flex align-items-center'>
                    <nav aria-label='breadcrumb'>
                      <ol className='breadcrumb'>
                        <li className='breadcrumb-item'>
                          {/* <a href='#'>Home</a> */}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
               
                 <div 
                  className='col-12 align-self-center'
                  style={{ textAlign: 'center' }}
                >
                 

                  <div className='d-flex align-items-center'>
                    <nav aria-label='breadcrumb'>
                      <ol className='breadcrumb'>
                        <li className='breadcrumb-item'></li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div
                  className='col-12 align-self-center'
                  style={{ textAlign: 'center' }}
                >
                  <div
                    className='d-flex no-block align-items-center wow fadeInUp'
                    style={{ justifyContent: 'center' }}
                  >
                    <div className>
                      <small
                        style={{
                          fontWeight: 'bold',
                          fontSize: '1.0rem',
                          fontStyle: 'italic'
                        }}
                      >
                        Featuring All COVID-19 Projects and supports in India
                        with their contact details
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            
            <div className='container-fluid'>
              
              <div className='row'>
                <Graph category={this.state.category}></Graph>
              </div>
              
              <div className='row' style={{ marginTop: '20px' }}>
                <ActiveCases data={this.state.data}></ActiveCases>
              </div>

              <div className='row'>
                <Twitter></Twitter>
              </div>
            </div>
           
          </div>
          
        </div>

        
      </div>
    );
  }
}

export default App;
