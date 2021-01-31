import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Alert from 'react-bootstrap/Alert';

const Category = [
  // 'All',
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
class UserDetailSetOne extends Component {
  continue = e => {
    e.preventDefault();
    // Form Validation

    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className='modal-body' style={styles.modal_body}>
            <h4 className='display-7'>
              Register as an Organization / Volunteer
            </h4>
            {this.props.display && (
              <div style={{ height: '3rem' }}>
                <Alert variant='danger'>
                  Please, fill all the fields in the form
                </Alert>
              </div>
            )}
            <TextField
              id='standard-basic'
              label='Organization Name / Name'
              onChange={handleChange('field_one')}
              value={values.field_one}
              style={styles.text_field}
              required
            />
            <br />
            <TextField
              id='standard-basic'
              label='Description'
              onChange={handleChange('field_two')}
              value={values.field_two}
              style={styles.text_field}
              required
            />
            <br />
            <TextField
              id='standard-basic'
              label='Address / Location'
              onChange={handleChange('field_three')}
              value={values.field_three}
              style={styles.text_field}
              required
            />
            <br />
            <br></br>
            <FormControl>
              <Select
                value={values.field_four}
                required
                onChange={handleChange('field_four')}
                displayEmpty
                // className={classes.selectEmpty}
                // style={{ width: '100%' }}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value='Category' disabled>
                  Category
                </MenuItem>
                {Category.length > 0 &&
                  Category.map(category => {
                    return <MenuItem value={category}>{category}</MenuItem>;
                  })}
              </Select>
              <FormHelperText>Category</FormHelperText>
            </FormControl>
            <br />
            <TextField
              id='standard-basic'
              label='Contact'
              onChange={handleChange('field_five')}
              value={values.field_five}
              style={styles.text_field}
              required
            />
            <br />
            <TextField
              id='standard-basic'
              label='Useful Link'
              onChange={handleChange('field_six')}
              value={values.field_six}
              style={styles.text_field}
              required
            />
            <br />
          </div>
          <div className='modal-footer'>
            <Button
              variant='contained'
              color='primary'
              style={styles.button}
              onClick={this.props.onSubmit}
              style={{ backgroundColor: '#46b7f5' }}
            >
              {this.props.loadingmssg}
              <i
                style={{ paddingLeft: '3px' }}
                className={this.props.loading}
              ></i>
            </Button>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  },
  text_field: {
    width: '85%',
    margin: 10
  },
  modal_body: {
    textAlign: 'center'
  }
};

export default UserDetailSetOne;
