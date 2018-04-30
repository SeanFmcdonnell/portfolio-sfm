import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container.js';

const Image = styled.img`
  width: 100%
  `;


  export default class Home extends Component {
    static propTypes = {};

    render() {
      return (
      <Container>
        <Image src={require('../assets/SeanMcDonnell.jpg')} alt="face-image"/>
        <p>Hi, my name is Sean. This is my React page.
        </p>
      </Container>
    ) ;
  }
}
