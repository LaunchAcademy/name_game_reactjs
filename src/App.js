import React, { Component } from 'react';
import PresidentList from './PresidentList';
import PhotoCard from './PhotoCard';
let _ = require('underscore');

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { people: PresidentList.items() };
  };

  render() {
    var person = _.sample(this.state.people);
    return (
      <PhotoCard correctPerson={person} />
    );
  }
}
