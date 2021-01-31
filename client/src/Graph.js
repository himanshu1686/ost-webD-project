import React, { Component, Fragment } from 'react';
import MapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import axios from 'axios';

// const TOKEN =
//   'pk.eyJ1IjoiYWJoaWxhc2hhLXNpbmhhIiwiYSI6ImNqdzFwYWN1ajBtOXM0OG1wbHAwdWJlNmwifQ.91s73Dy03voy-wPZEeuV5Q';
const TOKEN='pk.eyJ1IjoidXJ2aXNoa2V3bGR1ZGUiLCJhIjoiY2traWQwM2ltMGZleTJxdGRoZnZsMHNyayJ9.UxNxy1IZreVcSoEJwup2qw';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const Category = [
  'All',
  'Contact Tracing',
  'Fund donations',
  'Donations',
  'Mental Health',
  'Face shields',
  'Diagnostics',
  'Employee Support',
  'Infection control',
  'Medication',
  'Patient Engagement',
  'Informative portals',
  'PPE',
  'Supports- Hackathon',
  'Vaccinatory',
  'Financial support providers',
  'Tele-Medicines',
  'NGO Networking',
  'Tele Education Resources',
  'Covid Specialised Hospitals',
  'Food Providers',

  'Self Reporting Apps',
  'datasets',
  'Automobile',
  'Skill Training',
  'Mask Providers',
  'Heatmaps',
  'Volunteering orgs',
  'Want to Volunteer',
  'Bioinformatics',

  'Alert/tracking app',
  'Helpdesk',
  'Animal Care',
  'Others'
];
var idx;

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 22.9734,
        longitude: 78.6569,
        zoom: 4,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '500px',
        padding: '0px',
        margin: '0px'
      },
      display: [],
      markerList: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/graph/all_business')
      .then(response => {
        console.log('component graph mounted ')
        let arr = [];
        let array = [];
        for (let i = 0; i < response.data.length; ++i) {
          arr.push({
            lat: parseFloat(response.data[i].latitude),
            long: parseFloat(response.data[i].longitude),
            info: response.data[i].description,
            category: response.data[i].category,
            link: response.data[i].links,
            address: response.data[i].address,
            contact: response.data[i].contact,
            name: response.data[i].name
          });
          array.push(false);
          // // console.log('Data', response);
        }
        this.setState({ display: array });
        this.setState({
          markerList: arr
        });
      })
      .catch(error => {
        console.log("graph err");
         console.log(error);
      });
  }
  // showDetails=() => {
  // this.setState({popupInfo: true});
  // }

  // hideDetails= ()=> {
  // this.setState({popupInfo: null});
  // }
  popup = index => {

    const array = this.state.display;
    for (var i = 0; i < this.state.display.length; i++) {
      array[i] = false;
    }
    array[index] = true;
    this.setState({ display: array });
  };

  renderPopup(index) {
    if (
      this.state.display[index] === true
      // && this.props.category[index].selected == 1
    ) {
      return (
        <Popup
          tipSize={5}
          max-width='340px'
          anchor='bottom-right'
          longitude={this.state.markerList[index].long}
          latitude={this.state.markerList[index].lat}
          closeOnClick={false}
          closeButton={true}
          onClose={e => {
            var array = this.state.display;
            array[index] = false;
            this.setState({display:array});
          }}
        >
          <div>
            {this.state.markerList[index].category && (
              <p>
                <strong>Category:</strong>{' '}
                {this.state.markerList[index].category}
              </p>
            )}
            {this.state.markerList[index].name && (
              <p>
                <strong>Stakeholder/Entity:</strong>{' '}
                {this.state.markerList[index].name}
              </p>
            )}
            {this.state.markerList[index].info && (
              <p>
                <strong>Description:</strong>{' '}
                {this.state.markerList[index].info}
              </p>
            )}
            {this.state.markerList[index].link && (
              <Fragment>
                <p>
                  <strong>Useful Links:</strong>{' '}
                  <a href={this.state.markerList[index].link} target='_blank'>
                    {this.state.markerList[index].link}
                  </a>
                </p>
              </Fragment>
            )}
            {this.state.markerList[index].address && (
              <p>
                <strong>Address:</strong> {this.state.markerList[index].address}
              </p>
            )}

            {this.state.markerList[index].contact && (
              <p>
                <strong>Contact:</strong> {this.state.markerList[index].contact}
              </p>
            )}
          </div>
        </Popup>
      );
    } else {
      return null;
    }
  }

  changeColor(marker, index) {
    var i;
    for (i = 0; i < Category.length; i++) {
      if (Category[i] == marker.category) {
        break;
      }
    }
    //hello
    if (this.props.category[i].selected == 1) {
      return (
        <Marker longitude={marker.long} latitude={marker.lat}>
          <i
            className='fas fa-map-marker'
            name='hospital'
            size='big'
            style={{ color: this.props.category[i].color }}
            onClick={() => this.popup(index)}
          />
        </Marker>
      );
    }
    return null;
  }

  render() {
    const { viewport } = this.state;
    return (
      <MapGL
        {...viewport}
        width='100%'
        onViewportChange={viewport => this.setState({ viewport })}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        mapboxApiAccessToken={TOKEN}
      >
        <div className='nav' style={navStyle}>
          <NavigationControl
            onViewportChange={viewport => this.setState({ viewport })}
          />
          {this.state.markerList.map((marker, index) => {
            return (
              <div key={index}>
                {' '}
                {this.changeColor(marker, index)} {this.renderPopup(index)}
              </div>
            );
          })}
        </div>
      </MapGL>
    );
  }
}
