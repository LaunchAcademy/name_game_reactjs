import React, { Component } from 'react';
import { _ } from 'underscore';
import { PresidentList } from './PresidentList';
import PhotoGuessOption from './PhotoGuessOption';
import PhotoGuessResult from './PhotoGuessResult';

export default class PhotoCard extends Component {
  constructor(props){
    super(props);
  };

  optionSelected(selectedPerson, event){
    this.setState({
      selectedPerson: selectedPerson
    });
  };

  componentDidMount(){
    this.setState({
      selectedPerson: null,
      options: _.shuffle([
        this.props.correctPerson
      ].concat(this.props.otherPeople))
    });

  }

  render() {
    return (
      <div>
        <img src={ this.props.correctPerson.imageURL } />
        {
          this.state.options.map(_.bind(function(option){
            return <PhotoGuessOption whenClicked={_.bind(this.optionSelected, this)}
              person={option} key={option.index}
              className={this.state.selectedPerson === option ? 'selected' : 'unselected'} />
          }, this))
        }
        <PhotoGuessResult selectedPerson={this.state.selectedPerson} correctPerson={this.props.correctPerson} />
      </div>
    );
  }
}
