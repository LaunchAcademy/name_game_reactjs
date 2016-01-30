import React, { Component } from 'react';
import { _ } from 'underscore';

export default class PhotoGuessOption extends Component {
  constructor(props){
    super(props);
  }

  handleClick(e){
    if(this.props.whenClicked){
      this.props.whenClicked(this.props.person, e)
    }
  }

  render(){
    return (
      <li key={this.props.person.label } className={this.props.className}>
        <a data-person-label={this.props.person.label}
          onClick={_.bind(this.handleClick, this)}
          href="#">

          { this.props.person.label }
        </a>
      </li>
    );
  }
}
