import React from 'react';
import { Rect, Circle } from 'react-native-svg';
import ContentLoader from 'rn-content-loader';

export const UserMenuLoader = () => (
  <ContentLoader primaryColor="#f3f3f3" secondaryColor="#ecebeb">
    <Rect x="70" y="15" rx="4" ry="4" width="167" height="6" />
    <Rect x="70" y="35" rx="3" ry="3" width="91" height="6" />
    <Circle cx="30" cy="30" r="30" />
  </ContentLoader>
);
