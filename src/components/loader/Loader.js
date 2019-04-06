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

export const NewsLoader = () => (
  <ContentLoader
    height={475}
    width={500}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <Rect x="75" y="37" rx="4" ry="4" width="0" height="8" />
    <Rect x="-1" y="70" rx="5" ry="5" width="224" height="196" />
    <Rect x="243" y="69" rx="5" ry="5" width="224" height="196" />
    <Rect x="-1" y="306" rx="5" ry="5" width="112" height="104" />
    <Rect x="127" y="312" rx="5" ry="5" width="264" height="12" />
    <Rect x="127" y="331" rx="5" ry="5" width="264" height="12" />
    <Rect x="126" y="349" rx="5" ry="5" width="264" height="12" />
    <Rect x="127" y="371" rx="5" ry="5" width="264" height="12" />
    <Rect x="127" y="393" rx="5" ry="5" width="264" height="12" />
    <Rect x="1" y="7" rx="14" ry="14" width="91" height="51" />
    <Rect x="104" y="8" rx="14" ry="14" width="91" height="51" />
    <Rect x="211" y="7" rx="14" ry="14" width="91" height="51" />
    <Rect x="315" y="8" rx="14" ry="14" width="91" height="51" />
  </ContentLoader>
);
