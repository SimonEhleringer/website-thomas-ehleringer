import React from 'react';
import Slider from '../../components/Slider';
import { WillkommenWrapper } from './style';
import WelcomeText from '../../components/WelcomeText';

const Willkommen = () => {
  return (
    <>
      <WillkommenWrapper>
        <Slider></Slider>
        <WelcomeText></WelcomeText>
      </WillkommenWrapper>

      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </>
  );
};

export default Willkommen;
