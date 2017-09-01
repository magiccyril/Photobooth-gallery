import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchPhotos,
} from '../actions'

import Header from '../components/Header'
import Loader from '../components/Loader'
import Photo from '../components/Photo'

import '../assets/css/App.css';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPhotos())
  }
  
  render() {
    const listPhotos = this.props.photos.items.map((photo, index) =>
      <Photo key={ index } photo={ photo } />
    );
    
    return (
      <div className="App">
        <Header />
        { this.props.isFetching && <Loader/> }
        <section>{ listPhotos }</section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    photos,
  } = state

  return {
    photos,
    isFetching: photos.isFetching,
  }
}

export default connect(mapStateToProps)(App)
