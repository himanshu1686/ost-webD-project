import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.category[this.props.index].selected == 1) {
      return (
        <li className='sidebar-item' value='Contact Tracing' onClick={e => this.props.change(e, this.props.index)}>
          <a href='#' className='sidebar-link'>
            <i
              className={this.props.icons}
              style={{
                color: `${this.props.category[this.props.index].color}`,
                textShadow: '0 0 black'
              }}
            />
            <span
              className='hide-menu'
              style={{
                color: `${this.props.category[this.props.index].color}`,
                textShadow: '0 0 1px black'
              }}
            >
              {this.props.Category != 'Want to Volunteer'
                ? this.props.Category
                : 'Find a Volunteer'}{' '}
            </span>
          </a>
        </li>
      );
    } else {
      return (
        <li className='sidebar-item' value='Contact Tracing' onClick={e => this.props.change(e, this.props.index)}>
          <a href='#' className='sidebar-link'>
            <i
              className={this.props.icons}
            />
            <span
              className='hide-menu'
            >
              {' '}
              {this.props.Category}{' '}
            </span>
          </a>
        </li>
      );
    }
  }
}

export default Categories;
