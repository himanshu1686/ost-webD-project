import React, { Component } from 'react';
import UserDetailSetOne from './UserDetailSetOne';
import UserDetailSetTwo from './UserDetailSetTwo';
import Confirm from './Confirm';
import Success from './Success';
import Axios from 'axios';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      field_one: '',
      field_two: '',
      field_three: '',
      field_four: 'Want to Volunteer',
      field_five: '',
      field_six: '',
      field_seven: '',
      field_eight: '',
      loading: '',
      display: false,
      loading: '',
      loadingmssg: 'Submit for Approval'
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  onSubmit = async () => {
    if (
      this.state.field_one.split(' ').join('') == '' ||
      this.state.field_two.split(' ').join('') == '' ||
      this.state.field_three.split(' ').join('') == '' ||
      this.state.field_four.split(' ').join('') == '' ||
      this.state.field_five.split(' ').join('') == '' ||
      this.state.field_six.split(' ').join('') == ''
    ) {
      this.setState({ display: true });
      // console.log('empty');
    } else {
      this.setState({ loading: 'fa fa-spinner fa-spin' });
      this.setState({ loadingmssg: 'Loading ' });
      const res = await Axios.post('https://project-aashray.herokuapp.com/graph/add_to_graph', {
        address: this.state.field_three,
        name: this.state.field_one,
        description: this.state.field_two,
        contact: this.state.field_five,
        links: this.state.field_six,
        category: this.state.field_four
      });
      this.setState({ loading: '' });
      this.setState({ loadingmssg: 'Submit for Approval' });
      // console.log(res.data);
      window.location.reload(false);
    }
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  change = () => {
    this.setState({ display: false });
    // console.log(this.state.display);
  };

  render() {
    const { step } = this.state;
    const {
      field_one,
      field_two,
      field_three,
      field_four,
      field_five,
      field_six,
      field_seven,
      field_eight
    } = this.state;
    const values = {
      field_one,
      field_two,
      field_three,
      field_four,
      field_five,
      field_six,
      field_seven,
      field_eight
    };

    return (
      <UserDetailSetOne
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
        loading={this.state.loading}
        loadingmssg={this.state.loadingmssg}
        onSubmit={this.onSubmit}
        display={this.state.display}
        change={() => this.change}
      />
    );
  }
}

export default UserForm;
