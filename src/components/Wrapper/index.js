import React from 'react';
import { WrapperComponent } from './style';

const Wrapper = ({ children, id }) => {
  return <WrapperComponent id={id}>{children}</WrapperComponent>;
};

export default Wrapper;
