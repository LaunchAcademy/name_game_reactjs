import React, { Component } from 'react';
import PresidentList from './PresidentList';
import PhotoCard from './PhotoCard';
let _ = require('underscore');

export class App extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.setState({
      people: PresidentList.items()
    });
  };

  render() {
    let person;
    let otherPeople;
    if(this.state && this.state.people){
      person = _.sample(this.state.people);
      otherPeople = _.sample(this.state.people, 3);
      return (
        <PhotoCard correctPerson={person} otherPeople={ otherPeople } />
      );
    }
    else {
      return (<h1>Not found</h1>);
    }

  };
}
