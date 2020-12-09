import React from 'react';
import { BulletPointsContainerComponent } from './style';

const BulletPointsContainer = ({ children }) => {
  return (
    <BulletPointsContainerComponent>{children}</BulletPointsContainerComponent>
  );
};

export default BulletPointsContainer;
