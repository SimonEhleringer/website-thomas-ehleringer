import React from 'react';
import Slider from '../../components/Slider';
import Info from '../../components/Info'
import { WillkommenContainer, WillkommenWrapper } from './style'

const Willkommen = () => {
  return (
    <WillkommenWrapper>
      <WillkommenContainer>
        <Info></Info>
        
        <Slider></Slider>
      </WillkommenContainer>
      
    </WillkommenWrapper>
  );
};

export default Willkommen;
