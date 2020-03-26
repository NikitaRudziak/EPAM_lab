import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Welcome } from '../../components/Welcome';
import { MainContent } from '../../components/MainContent';
import { Bye } from '../../components/Bye';
import CardContainer from '../../components/Cards/CardContainer/CardContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppStyle from './App.module.scss';

export class App extends Component {
  render () {
    return  (
      <div className={AppStyle.app}>
        <Welcome firstName={this.props.firstName} lastName={this.props.lastName} />
        <CardContainer />
        <MainContent image={this.props.image} alt={this.props.alt} />
        <Bye firstName={this.props.firstName} lastName={this.props.firstName} />
      </div>
    )
  }
}

App.propTypes = {
  userData: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    avatar: PropTypes.shape({
      image: PropTypes.string,
      alt: PropTypes.string
    })
  })
};

const mapStateToProps = state => {
  return {
    firstName: state.cardReducer.user.firstName,
    lastName: state.cardReducer.user.lastName,
    image: state.cardReducer.avatar.image,
    alt: state.cardReducer.avatar.alt
  }
}

export default withRouter(connect(mapStateToProps)(App))
