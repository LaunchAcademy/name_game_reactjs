import React, { Component } from 'react';
import { _ } from 'underscore';

export default class PhotoGuessResult extends Component {
  text(){
    if(!this.props.selectedPerson){
      return '';
    }
    else {
      if(this.props.selectedPerson === this.props.correctPerson){
        return 'Right!';
      }
      else {
        return 'Wrong!';
      }
    }
  }
  render(){
    return <p>{ this.text() }</p>
  }
}
