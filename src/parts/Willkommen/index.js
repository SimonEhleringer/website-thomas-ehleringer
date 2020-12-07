import React from 'react';
import Slider from '../../components/Slider';
import { WillkommenWrapper } from './style';
import WelcomeText from '../../components/WelcomeText';
import willkommenImages from '../../assets/willkommen-images';

const Willkommen = () => {
  return (
    <>
      <WillkommenWrapper>
        <Slider images={willkommenImages} showText={true}></Slider>
        <WelcomeText></WelcomeText>
      </WillkommenWrapper>
    </>
  );
};

export default Willkommen;
