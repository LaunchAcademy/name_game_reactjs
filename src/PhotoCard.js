import React, { Component } from 'react';
import { PresidentList } from './PresidentList';

export default class PhotoCard extends Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <div>
        <img src={ this.props.correctPerson.imageURL } />
        <p>{ this.props.correctPerson.label }</p>
      </div>
    );
  }
}
